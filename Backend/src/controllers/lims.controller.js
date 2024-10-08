import { LIMS } from "../models/lims.model.js";
import gridRef from "../models/gridRef.model.js";
import { sequelize } from "../config/db.js";
import { getImageUrl } from "../middleware/authentication.js";
import { FormAuditTrail } from "../models/formAuditTrail.js";
import { Division } from "../models/division.model.js";
import { Department } from "../models/department.model.js";

const commonFeilds = [
  "approval",
  "storageCondition",
  "specification",
  "storageLocation",
  "STP",
  "analystPersonal",
  "controlSampleManagement",
  "departmentAdmin",
  "departmentQA",
  "departmentQC",
  "departmentStore",
  "users",
  "sL",
  "sLSampleP&A",
  "sLInvestigationL1",
  "sLInvestigationL2",
  "sMStorageCondition",
  "sMStandardProtocol",
  "sMStorageChamber",
  "sMChamberConditionMapping",
  "sMStabilityProtocol",
  "sMSampleStorage",
  "sMCOATemplate",
  "sMSampleLoginTemplate",
  "sMWorkSheetHeader",
  "sMSummaryReportHeader",
  "sMSampleAcceptanceTemplate",
  "sMSampleLogin",
  "smSampleAcceptance",
  "masterProduct",
  "mSampleType",
  "mSpecificationType",
  "mSpecifications",
  "mStandardTestProcedure",
  "mTestCategories",
  "mTestPlan",
  "mMyTest",
  "sSamplingConfiguration",
  "sSamplingRule",
  "sESampling",
  "sSamplingField",
  "sSampleTemplate",
  "iWSInternalRegistration",
  "iWSWorkingStandardIssue",
  "iVSRegistration",
  "iVSTemplate",
  "iVSPrepration",
  "iVSStandardization",
  "iVSUsage",
  "iCCS",
  "iCRI",
  "iCLR",
  "iCRR",
  "iCU",
  "iCI",
  "iColumnApplication",
  "iColumnRegistration",
  "iColumnPerformanceTest",
  "iColumnAssignment",
  "iColumnQualification",
  "iColumnUsage",
  "iColumnBatchAssignment",
  "iRSStandardRegistration",
  "iRSLotRegistration",
  "iRSUsageRegistration",
  "iCMRegistration",
  "iCMReferenceCulture",
  "iCMCultureTemplateC",


];

export const createLIMS = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const {
      reviewers,
      approvers,
      division_id,
      department_id,
      productName,
      genericName,
    } = req.body;

    const newLIMS = await LIMS.create(
      {
        reviewers: reviewers || [],
        approvers: approvers || [],
        division_id: division_id || 1,
        department_id: department_id || 1,
        stage: 1,
        status: "Under Initiation",
        productName: productName,
        genericName: genericName,
      },
      { transaction: t }
    );

    const grids = commonFeilds;
    const gridData = [];

    for (let i = 0; i < grids.length; i++) {
      const gridName = grids[i];
      const gridInfo = req.body[gridName];

      if (gridInfo) {
        let filePath = null;
        const files = req.files
          ? req.files.filter((f) => f.fieldname === gridName)
          : [];

        if (files && files.length > 0) {
          filePath = files.map((file) => ({
            fileName: file.originalname,
            fileUrl: getImageUrl(file),
          }));
        }

        const newGridRef = await gridRef.create(
          {
            limsId: newLIMS.limsId,
            primaryKey: gridName,
            data: gridInfo, // Assuming JSON string is passed in request
            fileAttachment: filePath ? filePath : null, // Store file URL if uploaded
          },
          { transaction: t }
        );

        gridData.push(newGridRef);
      }
    }

    await t.commit();
    return res.status(200).json({
      newLIMS,
      gridData,
    });
  } catch (error) {
    await t.rollback();
    console.error("Error creating LIMS:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const getAllLIMSData = async (req, res) => {
  try {
    const limsData = await LIMS.findAll({});
    if (limsData.length === 0) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }
    res.status(200).json(limsData);
  } catch (error) {
    console.error("Error fetching LIMS data:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch LIMS data",
    });
  }
};

export const getLIMSById = async (req, res) => {
  try {
    const alimsId = req.params.id;
    const limsData = await LIMS.findOne({
      where: { limsId: alimsId },
    });

    if (!limsData) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }

    let gridDatas = {};
    const grids = commonFeilds;

    for (let i = 0; i < grids.length; i++) {
      let gridData = await gridRef.findOne({
        where: { limsId: alimsId, primaryKey: grids[i] },
      });
      gridDatas[grids[i]] = gridData;
    }

    let resObject = {
      limsData,
      gridDatas,
    };

    res.status(200).json(resObject);
  } catch (error) {
    console.error("Error fetching LIMS data by ID:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch LIMS data",
    });
  }
};

export const updateLIMSById = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const alimsId = req.params.id;
    const { userId } = req.body.pQRData;

    const existingLIMS = await LIMS.findOne({
      where: { limsId: alimsId },
      include: [
        {
          model: gridRef,
        },
      ],
    });

    if (!existingLIMS) {
      return res.status(404).json({ error: true, message: "LIMS not found" });
    }
    const updateData = {
      userId: userId || existingLIMS.userId,
    };

    // Update LIMS data
    await existingLIMS.update(updateData, { transaction: t });

    const grids = commonFeilds;

    for (let i = 0; i < grids.length; i++) {
      const gridKey = grids[i];

      if (req.body.gridDatas[gridKey]) {
        const newGridData = req.body.gridDatas[gridKey];
        const existingGridRef = await gridRef.findOne({
          where: {
            limsId: alimsId,
            primaryKey: gridKey,
          },
          transaction: t,
        });

        if (existingGridRef) {
          const oldGridData = existingGridRef.data;

          if (JSON.stringify(newGridData) !== JSON.stringify(oldGridData)) {
            await existingGridRef.update(
              { data: newGridData },
              { transaction: t }
            );
          }
        } else {
          await gridRef.create(
            {
              limsId: alimsId,
              primaryKey: grids[i],
              data: newGridData,
            },
            { transaction: t }
          );
        }
      }
    }

    // Insert all audit trail entries in bulk
    if (auditTrailEntries.length > 0) {
      await FormAuditTrail.bulkCreate(auditTrailEntries, {
        transaction: t,
      });
    }

    await t.commit();
    res.status(200).json({ message: "LIMS updated successfully" });
  } catch (error) {
    if (!t.finished) {
      await t.rollback();
    }
    console.error("Error updating LIMS:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getDivision = async (req, res) => {
  try {
    const data = await Division.findAll({
      attributes: ["division_id", "name", "isActive"],
      include: [
        {
          model: Department,
          attributes: ["department_id", "name", "isActive"],
        },
      ],
    });

    return res.status(200).json({
      error: false,
      data,
    });
  } catch (error) {
    console.error("Error creating LIMS:", error);
    return res.status(500).json({ error: error.message });
  }
};
