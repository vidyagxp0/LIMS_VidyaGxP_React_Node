import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const instrumentUsageSchema = sequelize.define("instrumentUsage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  instrumentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instrumentCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usageCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  arNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usedFor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
