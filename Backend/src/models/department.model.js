import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Division } from "./division.model.js";

export const Department = sequelize.define("Department", {
  department_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  division_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Division,
      key: "division_id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

Department.addHook("afterSync", async () => {
  try {
    const processesCount = await Department.count();
    if (processesCount === 0) {
      await Department.bulkCreate([
        {
          division_id: 1,
          name: "LIMS",
        },
        {
          division_id: 1,
          name: "LIMS2",
        },
      ]);
      console.log("Departments created");
    } else {
      console.log("Departments already exists");
    }
  } catch (error) {
    console.error("Error inserting divisions:", error);
  }
});
Department.belongsTo(Division, { foreignKey: "division_id" });
Division.hasMany(Department, { foreignKey: "division_id" });
