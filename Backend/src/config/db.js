const { Sequelize } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(
  config.development.dbName,
  config.development.username,
  config.development.password,
  {
    dialect: config.development.dialect,
    host: config.development.host,
  }
);

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to DB");
    return sequelize; // Return the Sequelize instance after successful authentication
  } catch (e) {
    console.error("Unable to connect to the database:", e);
    throw e; // Propagate the error upwards if needed
  }
};

module.exports = { sequelize, connectToDB };
