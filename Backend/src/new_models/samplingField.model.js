import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const samplingFieldSchema = sequelize.define("samplingField", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fieldName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fieldType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  registeredBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  registeredOn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
