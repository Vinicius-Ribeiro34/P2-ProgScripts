const Sequelize = require("sequelize");

const connection = new Sequelize('bancojs02','root','admin', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;