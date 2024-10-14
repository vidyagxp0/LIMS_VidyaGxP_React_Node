import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const commonFields = [
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
  "sMStorageCondition",
  "sMStandardProtocol",
  "sMStorageChamber",
  "sMStabilityProtocol",
  "sMSampleStorage",
  "sMCOATemplate",
  "sMSampleLoginTemplate",
  "sMWorkSheetHeader",
  "sMSummaryReportHeader",
  "sMSampleAcceptanceTemplate",
  "sMSampleLogin",
  "mmasterProduct",
  "mSampleType",
  "mSpecificationType",
  "mSpecifications",
  "mStandardTestProcedure",
  "mTestCategories",
  "mTestPlan",
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
  "sMStockOnboarding",
  "sMMaterial",
  "sMInvetory",
  "cCalibrationType",
  "cCalibrationFrequency",
  "cCalibrationDataSheet",
  "cSampleLoginTemplate",
  "cCalibrationSchedule",
  "cCalibrationSampleLogin",
  "rCProblemReporting",
  "rCServiceReporting",
  "rCCoaTemplate",
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

// export const LIMS = sequelize.define("ALL_LIMS", {
//   limsId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   storageCondition: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   specification: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   storageLocation: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   STP: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   analystPersonal: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   controlSampleManagement: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   departmentAdmin: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   departmentQA: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   departmentQC: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   departmentStore: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   users: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sL: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sLSamplePA: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sLInvestigationL1: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sLInvestigationL2: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMStorageCondition: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMStandardProtocol: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMStorageChamber: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMChamberConditionMapping: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMStabilityProtocol: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMSampleStorage: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMCOATemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMSampleLoginTemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMWorkSheetHeader: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMSummaryReportHeader: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMSampleAcceptanceTemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMSampleLogin: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mmasterProduct: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mSampleType: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mSpecificationType: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mSpecifications: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mStandardTestProcedure: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mTestCategories: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   mTestPlan: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sSamplingConfiguration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sSamplingRule: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sESampling: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sSamplingField: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sSampleTemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWSInternalRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWSWorkingStandardIssue: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iVSRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iVSTemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iVSPrepration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iVSStandardization: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iVSUsage: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCCS: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCRI: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCLR: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCRR: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCU: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCI: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnApplication: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnPerformanceTest: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnAssignment: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnQualification: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnUsage: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iColumnBatchAssignment: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iRSStandardRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iRSLotRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iRSUsageRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCMRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCMReferenceCulture: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCMCultureTemplateC: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCMRefrenceCultureLot: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iCMCultureLotAcceptance: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaOnboarding: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaContainerType: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaTemplateConfiguration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaLot: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaLotContainerIssue: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaLotAcceptance: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMediaLotUsage: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMSampleArea: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMProcessingSystem: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMSchedule: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMUnschedule: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMAcknowledgement: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iWMSheduleTermination: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEFacility: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iELocation: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEMonitoringDetails: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iECOATemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEOOATemplate: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iELocationSample: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iESamplingSchedule: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEBatchSample: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iESampleLogin: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEAcknowledgementSample: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEBatchSampleAllotment: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iEBatchTestList: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMRegistration: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMInstrumentCategory: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMInstrumentModule: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   iMInstrumentUsage: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },
//   sMStockOnboarding: {
//     type: DataTypes.JSON,
//     allowNull: true,
//     defaultValue: [],
//   },

//   status: {
//     type: DataTypes.STRING,
//   },
//   isActive: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true,
//   },
//   createdAt: DataTypes.DATE,
//   updatedAt: DataTypes.DATE,
// });
