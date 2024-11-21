import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const specificationSpecSchema = sequelize.define("specificationSpec", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  specId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  attachment: {
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
  approvedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  batchLotNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  materialGrade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  MolecularFormula: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  packagingRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  storageConditions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shelfLife: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  labelingRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testParameter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testMethod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  acceptanceCriteria: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  unitsOfMeasurement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testFrequency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  controlSampleReference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  samplingPlan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  testMethodValidation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  referenceStandards: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resultInterpretation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stabilityCriteria: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reTestingInterval: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  regulatoryRequirements: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  certification: {
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
  documentReference: {
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
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewFrequency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expiryDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
