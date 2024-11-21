import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const storageLocationSchema = sequelize.define("storageLocation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  storageCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  storageName: {
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
