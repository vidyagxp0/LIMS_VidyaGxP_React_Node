import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const testCategoriesSchema = sequelize.define("testCategories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uniqueCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addedOn: {
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
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
