import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const standardTestProcedureSchema = sequelize.define(
  "standardTestProcedure",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specificationId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specificationName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    effectForm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reviewDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attachment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);
