import { sequelize } from "../config/db.js";
import { DataTypes, TEXT } from "sequelize";

export const SampleWorkFlow = sequelize.define("SampleWorkFlow", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  samplePlanId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  productMaterialName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  batchlotNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  samplePriority: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleQuantity: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  UOM: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tests: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  market: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleBarCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  specificationId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  specificationAttachment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stpId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stpAttachment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testMethod: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testParmeter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingFrequency: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingLocation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  requiredInstrument: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testGrouping: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lsl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingDeadline: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  plannerName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleSource: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  labTechnician: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  assignedDepartment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleCollectionDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingStartDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingEndDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  delayJustification: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingOutCome: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  passFail: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testPlanId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  turnAroundTime: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleRetestingDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleStorageLocation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  transportationMethod: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  samplePreparationMethod: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  samplePackagingDetail: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleLabel: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  regulatoryRequirement: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualityControlCheck: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  controlSampleReference: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleIntegrityStatus: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  assignedDepartment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  riskAssement: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  supervisor: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleMovementHistory: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingProgress: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  alertNotification: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  deviationLog: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  commentNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  attachment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  samplingFrequency: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleDisposition: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stabilityStudyType: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stabilityStudyProtocol: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stabilityProtocolApprovelDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  countryRegulatorySubmission: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ichZone: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  photoStabilityTestingResult: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reConstitutionStability: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testingInterval: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  shelfLifeRecommendation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewerApprover: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewerComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  QaReviewerApprover: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  QaReviewerComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  QaReviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  comment: {
    type: TEXT,
    allowNull: true,
  },
  stage: {
    type: TEXT,
    defaultValue: 1,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Under Initiation",
  },
  action: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
