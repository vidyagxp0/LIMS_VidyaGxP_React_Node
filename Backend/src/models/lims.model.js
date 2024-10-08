import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Department } from "./department.model.js";
import { Division } from "./division.model.js";

export const LIMS = sequelize.define("ALL_LIMS", {
  limsId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productUnderReview: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  productCodes: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  batchSizes: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  shelfLifeRetestDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reviewPeriod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mfgLicNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalNoOfBatchesManufactured: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalQtyManufactured: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalNoOfBatchesMicronised: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalQuantityMicronised: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalNoOfBatchesMilled: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalQuantityMilled: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalNoOfGammaSterilised: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalQuantityTransferToBSR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  startingMaterialSrc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  currentBMRrefNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  inProcessSpecificationRefno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  finishedProductSpecificationRefno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tinyData: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
  },
  stage: {
    type: DataTypes.INTEGER,
  },
  reviewers: {
    type: DataTypes.JSON,
  },
  approvers: {
    type: DataTypes.JSON,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Department,
      key: "department_id",
    },
  },
  description: {
    type: DataTypes.STRING,
  },
  division_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Division,
      key: "division_id",
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
