import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { User } from "./user.model.js";
import { LIMS } from "./lims.model.js";

export const FormAuditTrail = sequelize.define("FormAuditTrail", {
  auditTrail_id: {
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
  changed_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "user_id",
    },
  },
  previous_value: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  new_value: {
    type: DataTypes.TEXT,
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

FormAuditTrail.belongsTo(LIMS, {
  foreignKey: "limsId",
});
LIMS.hasMany(FormAuditTrail, {
  foreignKey: "limsId",
});
