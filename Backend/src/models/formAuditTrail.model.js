import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { User } from "./user.model.js";

export const FormAuditTrail = sequelize.define("FormAuditTrail", {
  auditTrail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  changed_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "user_id",
    },
  },
  previous_value: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  new_value: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  field_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previous_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  new_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

FormAuditTrail.belongsTo(User, { foreignKey: "changed_by" });
User.hasMany(FormAuditTrail, { foreignKey: "changed_by" });

