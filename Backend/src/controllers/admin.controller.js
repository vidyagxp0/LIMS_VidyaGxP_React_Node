import { User } from "../models/user.model.js";
import { UserRole } from "../models/userRole.model.js";
import { Role } from "../models/role.model.js";
import config from "../config/config.json" assert { type: "json" };
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sequelize } from "../config/db.js";
import { getImageUrl } from "../middleware/authentication.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password presence
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid Credentials" });
    }

    // Find user by email using prepared statement approach (assuming a library like Sequelize)
    const data = await User.findOne({
      where: { email: email.toLowerCase(), isActive: true },
    });
    if (!data) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid Credentials" });
    }

    // Fetch user roles
    const userRoles = await UserRole.findAll({
      where: { user_id: data.user_id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    // Check for admin role
    const hasAdminRole = userRoles.some((role) => role.role_id === 1); // Admin role ID

    if (!hasAdminRole) {
      return res.status(401).json({
        error: true,
        message: "User does not have an admin role!",
      });
    }

    // Validate password
    bcrypt.compare(password, data.password, async (err, result) => {
      if (err) {
        console.error(err); // Log error for debugging
        return res
          .status(500)
          .json({ error: true, message: "Internal Server Error" });
      }

      if (!result) {
        return res
          .status(401)
          .json({ error: true, message: "Invalid Credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: data.user_id },
        config.development.JWT_ADMIN_SECRET,
        { expiresIn: "24h" }
      );

      if (token) {
        res.status(200).json({ error: false, token: token });
      } else {
        console.error("Error generating JWT token"); // Log error for debugging
        res.status(500).json({ error: true, message: "Internal Server Error" });
      }
    });
  } catch (e) {
    console.error(e); // Log error for debugging
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

export const signUp = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      password,
      email,
      // gender,
      name,
      rolesArray,
      // designation,
      // user_type,
    } = req.body;

    if (!password || !email || !name || !rolesArray) {
      return res.status(400).json({
        error: true,
        message: "Please provide proper user details!",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      where: { email: email, isActive: true },
    });

    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: "User already registered!",
      });
    } else {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // Create the user
      const newUser = await User.create(
        {
          name: name,
          email: email,
          // gender: gender,
          // designation: designation,
          password: hashPassword,
          // user_type: user_type,
          // profile_pic: getImageUrl(req?.file),
        },
        { transaction }
      );
      // // Old
      for (const role of rolesArray) {
        const roles = await Role.findAll({
          where: {
            role_id: role,
          },
          transaction,
        });
        // Add roles to UserRole table
        const userRoles = roles.map((role) => ({
          user_id: newUser.user_id,
          role_id: role.role_id,
          role: role.role,
        }));
        await UserRole.bulkCreate(userRoles, { transaction });
      }

      // Commit the transaction
      await transaction.commit();

      return res.status(200).json({
        error: false,
        message: "User Registered",
      });
    }
  } catch (error) {
    // Rollback the transaction in case of error
    await transaction.rollback();
    return res.status(500).json({
      error: true,
      message: `Error during registration: ${error.message}`,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "Email and password are required" });
    }

    const data = await User.findOne({
      where: { email: email.toLowerCase(), isActive: true },
    });

    if (!data) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid email or password" });
    }

    const result = await bcrypt.compare(password, data.password);

    if (!result) {
      return res.status(401).json({ error: true, message: "Invalid password" });
    }

    const userRoles = await UserRole.findAll({
      where: { user_id: data.user_id },
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: data.user_id, roles: userRoles },
      config.development.JWT_ADMIN_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({ error: false, token: token, data: data });
  } catch (error) {
    console.error("Error in Userlogin:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

export const editUser = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { password, email, gender, name, rolesArray, designation } = req.body;

    // Update user details
    const userdetails = {
      name: name,
      email: email,
      designation: designation,
      gender: gender,
      profile_pic: getImageUrl(req?.file),
    };

    if (password && password.length > 0) {
      const salt = bcrypt.genSaltSync(10);
      const hashpass = bcrypt.hashSync(password, salt);
      userdetails.password = hashpass;
    }

    await User.update(userdetails, {
      where: { user_id: req.params.id },
      transaction,
    });

    await UserRole.destroy({
      where: { user_id: req.params.id },
      transaction,
    });

    for (const role of rolesArray) {
      const roles = await Role.findAll({
        where: {
          role_id: role,
        },
        transaction,
      });

      const userRoles = roles.map((role) => ({
        user_id: req.params.id,
        role_id: role.role_id,
        role: role.role,
      }));
      await UserRole.bulkCreate(userRoles, { transaction });
    }

    // Commit the transaction
    await transaction.commit();
    return res.status(200).json({
      error: false,
      message: "User Details Updated",
      data: userdetails,
    });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({
      error: true,
      message: `Error during update: ${error.message}`,
    });
  }
};

export const deleteUser = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await User.findOne(
      { where: { user_id: req.params.id, isActive: true } },
      { transaction }
    );
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    await User.update(
      { isActive: false },
      {
        where: {
          user_id: req.params.id,
        },
      }
    );

    await transaction.commit();
    res.json({
      error: false,
      message: "User deleted successfully",
    });
  } catch (err) {
    await transaction.rollback();
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll({
      where: {
        isActive: true,
      },
      include: {
        model: UserRole,
        attributes: ["role_id", "role"],
      },
    });

    return res.status(200).json({
      error: false,
      message: "Users fetched successfully",
      response: data,
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      response: e.message,
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const data = await Role.findAll({});
    return res.status(200).json({
      error: false,
      response: data,
    });
  } catch (e) {
    res.status(500).json({
      error: true,
      response: e.message,
    });
  }
};

export const getUserPermissions = async (req, res) => {
  try {
    const data = await UserRole.findAll({
      where: {
        user_id: req.params.id,
      },
    });
    return res.status(200).json({
      error: false,
      message: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};
