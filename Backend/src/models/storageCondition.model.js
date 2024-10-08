// import { sequelize } from "../config/db.js";
// import { DataTypes, Sequelize } from "sequelize";

// export const StorageCondition = sequelize.define("StorageCondition", {
//   StorageCondition_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   conditionCode: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   stabilityStorageCondition: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   attachment: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   isActive: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//   },
// });