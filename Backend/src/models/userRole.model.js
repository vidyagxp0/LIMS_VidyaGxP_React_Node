import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Role } from "./role.model.js";
import { User } from "./user.model.js";

export const UserRole = sequelize.define("UserRole", {
  userRole_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: "role_id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserRole.addHook("afterSync", async () => {
  try {
    const user_Role_Counts = await UserRole.count();
    if (user_Role_Counts === 0) {
      // Assign admin role
      const rolesAdmin = "Admin";
      const rolesInitiator = "Initiator";
      const rolesReviewer = "Reviewer";
      const rolesApprover = "Approver";
      const rolesViewonly = "Viewonly";
      const rolesFullpermission = "Fullpermission";

      await UserRole.bulkCreate([
        { role_id: 1, user_id: 1, role: rolesAdmin },
        { role_id: 2, user_id: 1, role: rolesInitiator },
        { role_id: 3, user_id: 1, role: rolesReviewer },
        { role_id: 4, user_id: 1, role: rolesApprover },
        { role_id: 5, user_id: 1, role: rolesViewonly },
        { role_id: 6, user_id: 1, role: rolesFullpermission },

        { role_id: 1, user_id: 2, role: rolesAdmin },
        { role_id: 2, user_id: 2, role: rolesInitiator },
        { role_id: 3, user_id: 2, role: rolesReviewer },
        { role_id: 4, user_id: 2, role: rolesApprover },
        { role_id: 5, user_id: 2, role: rolesViewonly },
        { role_id: 6, user_id: 2, role: rolesFullpermission },

        { role_id: 1, user_id: 3, role: rolesAdmin },
        { role_id: 2, user_id: 3, role: rolesInitiator },
        { role_id: 3, user_id: 3, role: rolesReviewer },
        { role_id: 4, user_id: 3, role: rolesApprover },
        { role_id: 5, user_id: 3, role: rolesViewonly },
        { role_id: 6, user_id: 3, role: rolesFullpermission },
      ]);
      console.log("Admin Role assigned to user");
    }
  } catch (error) {
    console.error("Error in assigning admin role to the user:", error);
  }
});

UserRole.belongsTo(User, { foreignKey: "user_id" });
UserRole.belongsTo(Role, { foreignKey: "role_id" });

User.hasMany(UserRole, { foreignKey: "user_id" });
Role.hasMany(UserRole, { foreignKey: "role_id" });

