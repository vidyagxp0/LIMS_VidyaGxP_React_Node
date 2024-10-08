import { LIMS } from "../models/lims.model.js";
import { sequelize } from "../config/db.js";
import { Division } from "../models/division.model.js";
import { Department } from "../models/department.model.js";

const commonFeilds = [
  // "approval", //list
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

export const createLIMS = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const newLIMS = await LIMS.create(
      {
        ...req.body,
      },
      { transaction: t }
    );

    await t.commit();
    return res.status(200).json({
      newLIMS,
    });
  } catch (error) {
    await t.rollback();
    console.error("Error creating LIMS:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const getAllLIMSData = async (req, res) => {
  try {
      const limsData = await LIMS.findAll({
        attributes: commonFeilds, // Specify the fields to include
      });

      if (limsData.length === 0) {
        return res.status(404).json({ error: true, message: "Data not found" });
      }

      // Filter out fields with empty arrays
      const filteredLimsData = limsData.map((data) => {
        const filteredData = {};

        // Loop through each field and only include it if it's not an empty array
        Object.keys(data.toJSON()).forEach((key) => {
          if (!(Array.isArray(data[key]) && data[key].length === 0)) {
            filteredData[key] = data[key];
          }
        });

        return filteredData;
      });

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

export const updateFieldBySno = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { id, sno, fieldName } = req.params;
    const updateData = req.body; //(e.g., `conditionCode`, `ssCondition`)

    const limsRecord = await LIMS.findByPk(id);
    if (!limsRecord) {
      return res.status(404).json({ error: "LIMS record not found" });
    }

    if (!commonFeilds.includes(fieldName)) {
      return res.status(400).json({ error: "Invalid field name" });
    }

    let fieldArray = limsRecord[fieldName];

    const fieldIndex = fieldArray.findIndex((item) => item["s.no"] == sno);

    if (fieldIndex === -1) {
      return res
        .status(404)
        .json({ error: `${fieldName} with s.no ${sno} not found` });
    }

    fieldArray[fieldIndex] = {
      ...fieldArray[fieldIndex],
      ...updateData, // This will update only the fields provided in the request body
    };
    // Mark the field as changed (important for JSON fields)
    limsRecord[fieldName] = fieldArray;
    limsRecord.changed(fieldName, true); // Explicitly mark the field as changed

    const updatedLIMS = await limsRecord.save({ transaction: t });

    await t.commit();
    return res
      .status(200)
      .json({ message: `${fieldName} updated successfully`, updatedLIMS });
  } catch (error) {
    await t.rollback();
    console.error("Error updating field:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteStorageConditionById = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { id, sno } = req.params; // `id` for LIMS, `sno` for storageCondition identifier

    // Find the LIMS record
    const limsRecord = await LIMS.findByPk(id);

    if (!limsRecord) {
      return res.status(404).json({ error: "LIMS record not found" });
    }

    let storageConditions = limsRecord.storageCondition;

    // Find the object by s.no in the storageCondition array
    const conditionIndex = storageConditions.findIndex(
      (cond) => cond["s.no"] == sno
    );

    if (conditionIndex === -1) {
      return res.status(404).json({ error: "Storage condition not found" });
    }

    // Remove the specific object
    storageConditions.splice(conditionIndex, 1);

    // Mark the field as changed (important for JSON fields)
    limsRecord.storageCondition = storageConditions;
    limsRecord.changed("storageCondition", true); // Explicitly mark the field as changed

    // Save the updated record in the database
    const updatedLIMS = await limsRecord.save({ transaction: t });

    // Commit the transaction
    await t.commit();

    return res
      .status(200)
      .json({ message: "Storage condition deleted successfully", updatedLIMS });
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
