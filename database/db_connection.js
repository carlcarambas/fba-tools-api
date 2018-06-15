require('dotenv').config();
const Sequelize = require('sequelize');

const host = process.env.DB_HOST;
const database = process.env.DB_SCHEMA;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;
const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};

const connection = new Sequelize(database, user, password, {
    host: host,
    pool: pool,
    port: port,
    dialect: dialect,  
});

module.exports = connection;