import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const sampleTypeSchema = sequelize.define("sampleType", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sampleTypeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  daysToComplete: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
