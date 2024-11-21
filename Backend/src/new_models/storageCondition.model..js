import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const storageConditionSchema = sequelize.define("storageCondition", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  storageName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  conditionCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stabilityStorageCondition: {
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
});
