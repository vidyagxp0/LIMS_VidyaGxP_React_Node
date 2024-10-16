import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const commonFields = [
  "approval",
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
  "sLInvestigationL1",
  "sLInvestigationL2",
  "sMStorageCondition",
  "sMStandardProtocol",
  "sMStorageChamber",
  "mTestRegistration",
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
  "mmasterProduct",
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
  "sLInvestigationL2",
  "sLInvestigationL1",
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
  "sMStockVerification",
  "sMStockOnboarding",
  "sMMaterial",
  "sMInvetory",
  "cCalibrationType",
  "cCalibrationFrequency",
  "cCalibrationDataSheet",
  "cSampleLoginTemplate",
  "cCalibrationSchedule",
  "cCalibrationRecord",
  "cCalibrationSampleLogin",
  "cCalibrationCalendar",
  "rCProblemReporting",
  "rCServiceReporting",
  "rCCoaTemplate",
  "rCReleasedCoa",
  "rCInvestigationCoa",
  "vendor",
  "client",
  "plant",
  "workFlow",
  "auditTrail",
  "sBusinessAssociate",
  "sLabelManagement",
  "sFunctionalGrouping",
  "sWorksheet",
  "sWorksheetField",
  "sGroupName",
  "sInvestigationTemplate",
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

const generateAttributes = (fields) => {
  const attributes = {};

  attributes.limsId = {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  };

  fields.forEach((field) => {
    attributes[field] = {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    };
  });

  return attributes;
};

export const LIMS = sequelize.define("LIMS", generateAttributes(commonFields), {
  tableName: "ALL_LIMS",
  timestamps: false,
});

LIMS.addHook("afterSync", async () => {
  try {
    const lims_Counts = await LIMS.count();
    if (lims_Counts === 0) {
      // Create a default record with empty fields or initial data
      const defaultLIMS = {};
      commonFields.forEach((field) => {
        defaultLIMS[field] = [];
      });
      await LIMS.create({
        defaultLIMS,
      });
      console.log("Lims structure genrated");
    } else {
      console.log("Lims structure exist");
    }
  } catch (error) {
    console.error("Error in Lims structure genrating:", error);
  }
});
