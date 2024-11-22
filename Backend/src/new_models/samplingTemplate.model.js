import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const samplingTemplateSchema = sequelize.define("samplingTemplate", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  templateName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uniqueCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addedOn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
