import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const eSamplingSchema = sequelize.define("eSampling", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  samplingConfiguration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productMaterialName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfContainers: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  containersSampled: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  samplingConclusion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sampleBarcode: {
    type: DataTypes.TEXT,
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
