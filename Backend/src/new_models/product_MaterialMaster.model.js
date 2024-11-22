import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const ProductMaterialMasterSchema = sequelize.define(
  "productMaterialMaster",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    uniqueCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genericName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reTestingPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);