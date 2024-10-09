import jwt from "jsonwebtoken";
import config from "../config/config.json" assert { type: "json" };
import { UserRole } from "../models/userRole.model.js";

export const checkJwtToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized User",
    });
  }

  jwt.verify(token, config.development.JWT_ADMIN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized User",
      });
    }
    req.user = decoded;
    next();
  });
};

export const getFileUrl = (file) => {
  if (file?.filename) {
    return `${config.development.URL}:${config.development.PORT}/documents/${file?.filename}`;
  }
};
export const getImageUrl = (file) => {
  if (file?.filename) {
    return `${config.development.URL}:${config.development.PORT}/images/${file?.filename}`;
  }
};

export const authorizeUserRole = (roleId) => {
  return (req, res, next) => {
    UserRole.findAll({
      where: {
        user_id: req.user.userId,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
      .then((userRoles) => {
        if (hasAccess(userRoles, roleId)) {
          next(); // User has access, proceed to the next middleware or route handler
        } else {
          res.status(403).json({
            message: "Forbidden: You do not have required permissions.",
          });
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
};

export const hasAccess=(userRoles, roleId) => {
  return userRoles.some(
    (role) =>
      role.role_id === 1 || role.role_id === 6 || role.role_id === roleId
  );
}