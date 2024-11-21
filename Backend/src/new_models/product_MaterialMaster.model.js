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
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uniqueCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genericName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reTestingPeriod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);
