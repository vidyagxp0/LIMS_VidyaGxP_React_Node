import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { genSalt, hash } from "bcrypt";

export const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM("Male", "Female", "Other"),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 255], // Minimum and maximum allowed length
        msg: "Password must be at least 8 characters long",
      },
    },
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  user_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.addHook("afterSync", async () => {
  try {
    const processesCount = await User.count();
    const salt = await genSalt(10);
    const hashpass = await hash("Amit@121", salt);
    const commonPass = await hash("lims@123", salt);
    if (processesCount === 0) {
      await User.bulkCreate([
        {
          name: "Admin",
          email: "admin@vidyagxp.com",
          password: hashpass,
          user_type: "admin",
        },
        {
          name: "Amit",
          email: "amit@gmail.com",
          password: commonPass,
          user_type: "user",
        },
        {
          name: "User",
          email: "user@gmail.com",
          password: commonPass,
          user_type: "user",
        },
      ]);
      console.log("Admin User created");
    } else {
      console.log("Admin User already exist");
    }
  } catch (error) {
    console.error("Error creating Admin User:", error);
  }
});
