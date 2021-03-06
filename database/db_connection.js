require('dotenv').config();
const Sequelize = require('sequelize');
const knex = require('knex');

const host = process.env.DB_HOST;
const database = process.env.DB_SCHEMA;
const account_database = process.env.DB_SCHEMA_ACCOUNT;
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

const sequelizeConnection = new Sequelize(database, user, password, {
    host: host,
    pool: pool,
    port: port,
    dialect: dialect,
});

const knexConnection = knex({
    client: dialect,
    connection: {
        host: host,
        port: port,
        user: user,
        password: password,
        database: database
    }
});

const knexConnectionAccount = knex({
    client: dialect,
    connection: {
        host: host,
        port: port,
        user: user,
        password: password,
        database: account_database
    }
});

const getDatabaseConfig = request => {
    const map = {
        'database' : database
    }

    return map[request];
}

module.exports = {
    sequelizeConnection,
    knexConnection,
    knexConnectionAccount,
    getDatabaseConfig,
};