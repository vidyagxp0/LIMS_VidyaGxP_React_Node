import { sequelize } from "../config/db.js";
import { DataTypes, TEXT } from "sequelize";

export const ControlSample = sequelize.define("ControlSample", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sampleId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  productMaterialName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  productMaterialCode: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  market: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  arNo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  batchNo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mfgDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  expiryDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  quantityWithdrawn: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  currentQuantity: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  uom: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  storageLocation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  storageCondition: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  visualInspectionSheduledOn: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  visualInspectionPerformedBy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  anyAbnoramalObservation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ObservationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  destructionDueOn: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  destroyedBy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  neutralizingAgent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  destructionDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stage: {
    type: TEXT,
    defaultValue: "1",
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: "Under Initiation",
  },
  initiatorName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  initiatorComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  initiatorReviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewerName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewerComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
