import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const myTestSchema = sequelize.define("myTest", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  arNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sampleIncharge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  assignedOn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
