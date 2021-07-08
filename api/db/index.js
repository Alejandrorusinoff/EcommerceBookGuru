const Sequelize = require("sequelize");

const db = new Sequelize("bookguru", "postgres", "a", {
  logging: false,
  dialect: "postgres",
});

module.exports = db;
