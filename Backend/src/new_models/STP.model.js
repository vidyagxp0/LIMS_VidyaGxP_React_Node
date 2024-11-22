import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const STPSchema = sequelize.define("STP", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  stp_Id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stpTitleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stpAttachment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  versionNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  effectiveDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  creationDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reviewedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  approvedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  objective: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testProcedureDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testMethodReference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  samplePreparation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reagentsStandardsUsed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  equipmentInstrumentRequired: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  calibrationRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  environmentalConditions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  controlSampleRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testParameters: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  safetyPrecautions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  validationRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  calculationFormulae: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  LSL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  USL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resultInterpretation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expectedResults: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reportTemplate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dataRecordingProcedure: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testFrequency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testReportSubmission: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deviationHandling: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  auditTrail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  revisionHistory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  attachments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
