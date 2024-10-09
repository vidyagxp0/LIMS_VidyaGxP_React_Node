import { LIMS } from "../models/lims.model.js";
import { sequelize } from "../config/db.js";
import { Division } from "../models/division.model.js";
import { Department } from "../models/department.model.js";
import {
  findLIMSById,
  createNewLIMS,
  updateLIMSField,
  addLIMSField,
} from "../service/limsService.js";

const commonFeilds = [
  // "approval", //list
  "specification",
  "storageCondition",
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
  "sLSamplePA",
  // "sLInvestigationL1",//list
  // "sLInvestigationL2",//list
  "sMStorageCondition",
  "sMStandardProtocol",
  "sMStorageChamber",
  // "sMChamberConditionMapping",//list
  "sMStabilityProtocol",
  "sMSampleStorage",
  "sMCOATemplate",
  "sMSampleLoginTemplate",
  "sMWorkSheetHeader",
  "sMSummaryReportHeader",
  "sMSampleAcceptanceTemplate",
  "sMSampleLogin",
  // "smSampleAcceptance",//list
  "mmasterProduct",
  "mSampleType",
  "mSpecificationType",
  "mSpecifications",
  "mStandardTestProcedure",
  "mTestCategories",
  "mTestPlan",
  // "mMyTest",//list
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
  "iCMRefrenceCultureLot",
  "iCMCultureLotAcceptance",
  "iMediaOnboarding",
  "iMediaContainerType",
  "iMediaTemplateConfiguration",
  "iMediaLot",
  "iMediaLotContainerIssue",
  "iMediaLotAcceptance",
  "iMediaLotUsage",
  "iWMSampleArea",
  "iWMProcessingSystem",
  "iWMSchedule",
  "iWMUnschedule",
  "iWMAcknowledgement",
  "iWMSheduleTermination",
  "iEFacility",
  "iELocation",
  "iEMonitoringDetails",
  "iECOATemplate",
  "iEOOATemplate",
  "iELocationSample",
  "iESamplingSchedule",
  "iEBatchSample",
  "iESampleLogin",
  "iEAcknowledgementSample",
  "iEBatchSampleAllotment",
  "iEBatchTestList",
  "iMRegistration",
  "iMInstrumentCategory",
  "iMInstrumentModule",
  "iMInstrumentUsage",
  // "sMStockVerification",//list
  "sMStockOnboarding",
  "sMMaterial",
  "sMInvetory",
  "cCalibrationType",
  "cCalibrationFrequency",
  "cCalibrationDataSheet",
  "cSampleLoginTemplate",
  "cCalibrationSchedule",
  // "cCalibrationRecord",//list
  "cCalibrationSampleLogin",
  // "cCalibrationCalendar",
  "rCProblemReporting",
  "rCServiceReporting",
  "rCCoaTemplate",
  // "rCReleasedCoa",//list
  // "rCInvestigationCoa",//list
  "vendor",
  "client",
  "plant",
  "worlFlow",
  "auditTrail",
  "sBusinessAssociate",
  "sLabelManagement",
  "sFunctionalGrouping",
  "sWorksheet",
  "sWorksheetField",
  "sGroupName",
  // "sInvestigationTemplate",//list
  "sChemicalCategory",
  "sGrade",
  "sHandlingSymbol",
  "sProject",
  "sAnalystTemplate",
  "sTrainingConfirmation",
  "sProposal",
  "sNomination",
  "sReQualificationRequest",
  "sResource",
  "sTypeOfSection",
  "sWOSTest",
  "sServiceProvider",
  "sTestTechnique",
  "sVendor",
];

const withTransaction = async (callback) => {
  const t = await sequelize.transaction();
  try {
    const result = await callback(t);
    await t.commit();
    return result;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export const manageLIMS = async (req, res) => {
  const { fieldName, sno, add, update } = req.params;
  try {
    await withTransaction(async (t) => {
      const existingLIMS = await findLIMSById("1");
      if (!existingLIMS) {
        return res.status(404).json({ error: "LIMS not found" });
      }
      if (!commonFeilds.includes(fieldName)) {
        return res.status(400).json({ error: "Invalid field name" });
      }
      if (add === "add") {
        const updatedLIMS = await addLIMSField(
          existingLIMS,
          fieldName,
          req.body,
          t
        );
        return res.status(200).json({
          message: `${fieldName} updated successfully`,
          updatedLIMS,
        });
      }
      if (update === "update") {
        const updatedLIMS = await updateLIMSField(
          existingLIMS,
          fieldName,
          sno,
          req.body,
          t
        );
        return res.status(200).json({
          message: `${fieldName} updated successfully`,
          updatedLIMS,
        });
      }
    });
  } catch (error) {
    console.error("Error managing LIMS:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const getAllLIMSData = async (req, res) => {
  try {
    const { fieldName } = req.params;
    if (!fieldName) {
      return res.status(400).json({
        error: true,
        message: "Field name is required",
      });
    }

    const limsData = await LIMS.findAll({});

    if (limsData.length === 0) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }

    // Extract the specific fieldName data from each LIMS record
    const filteredLimsData = limsData
      .map((data) => {
        const limsRecord = data.toJSON();
        if (limsRecord[fieldName]) {
          return {
            [fieldName]: limsRecord[fieldName],
          };
        }
        return null;
      })
      .filter((record) => record !== null);

    if (filteredLimsData.length === 0) {
      return res.status(404).json({
        error: true,
        message: `No data found for field: ${fieldName}`,
      });
    }

    res.status(200).json(filteredLimsData);
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
    const { id } = req.params;
    const limsRecord = await LIMS.findByPk(id);

    if (!limsRecord) {
      return res.status(404).json({ error: "LIMS record not found" });
    }

    return res.status(200).json(limsRecord);
  } catch (error) {
    console.error("Error fetching LIMS:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteStorageConditionById = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { fieldName, sno } = req.params;
    const existingLIMS = await findLIMSById("1");
    if (!existingLIMS) {
      return res.status(404).json({ error: "LIMS record not found" });
    }

    let field = existingLIMS[fieldName];
    if (!field || !Array.isArray(field)) {
      return res
        .status(400)
        .json({ error: `Field ${fieldName} is not valid or not an array` });
    }

    const conditionIndex = field.findIndex((item) => item["s.no"] == sno);
    if (conditionIndex === -1) {
      return res
        .status(404)
        .json({ error: `${fieldName} with s.no ${sno} not found` });
    }

    field.splice(conditionIndex, 1);

    existingLIMS[fieldName] = field;
    existingLIMS.changed(fieldName, true);

    const updatedLIMS = await existingLIMS.save({ transaction: t });

    await t.commit();
    return res.status(200).json({
      message: `${fieldName} deleted successfully`,
    });
  } catch (error) {
    await t.rollback();
    console.error("Error deleting storage condition:", error);
    return res.status(500).json({ error: error.message });
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
