import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const samplingConfigurationSchema = sequelize.define(
  "samplingConfiguration",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    samplingId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specificationId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sampleType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    testPlan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sampleTemplate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sampleRule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);
