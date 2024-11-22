import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const registrationToInstrumentMasetrSchema = sequelize.define(
  "registrationToInstrumentMasetr",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instrumentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    made: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    menuNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    installedAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiryOn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calibrationDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calibrationDueOn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calibrationStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);
