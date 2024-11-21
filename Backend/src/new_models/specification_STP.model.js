import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const specificationSTPSchema = sequelize.define("specificationSTP", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  documentName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dueDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  effectiveDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ccRefrence: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
