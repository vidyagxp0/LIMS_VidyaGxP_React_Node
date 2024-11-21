import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const specificationTypeSchema = sequelize.define("specificationType", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  specificationType: {
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
