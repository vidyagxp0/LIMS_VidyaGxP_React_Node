import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { LIMS } from "./lims.model.js";

// Define gridRef
const gridRef = sequelize.define("MainGrid", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  limsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: LIMS,
      key: "limsId",
    },
  },
  primaryKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  fileAttachment: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

LIMS.hasMany(gridRef, { foreignKey: "limsId" });
gridRef.belongsTo(LIMS, { foreignKey: "limsId" });


export default gridRef;
