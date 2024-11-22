import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const testPlanSchema = sequelize.define("testPlan", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  specificationId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tests: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  initiatedAt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
