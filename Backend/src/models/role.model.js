import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Role = sequelize.define("Role", {
  role_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Role.addHook("afterSync", async () => {
  try {
    const rolesCount = await Role.count();
    if (rolesCount === 0) {
      await Role.bulkCreate([
        { role: "Admin" },
        { role: "Initiator" },
        { role: "Lab Technician" },
        { role: "Supervisor" },
        { role: "QA" },
        { role: "Fullpermission" },
      ]);
      console.log("Roles created");
    } else {
      console.log("Roles already exist");
    }
  } catch (error) {
    console.error("Error creating roles:", error);
  }
});

