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
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specificationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    effectForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attachment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);
