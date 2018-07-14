/**
 * @todo Modify current select view method to return array of column named "name" at index 1 or return statement
 */


/**
 * 
 * @param {*} query String. Raw SQL query  to be run 
 * @param {*} parameters Array. Parameters to be prepared with query (if needed)
 * @param {*} knex Object. Knex connection
 */
const runRawQuery = function (query, parameters, knex) {
    return knex.raw(query, parameters).
        then(data => {
            let res = JSON.stringify(data);
            let temp = JSON.parse(res);
            return Promise.resolve(temp);
        });
};

/**
 * @description Run raw query using sequelize
 * @param {*} query 
 * @param {*} parameters 
 * @param {*} sequelize 
 */
const runRawQuerySequelize = function (query, parameters, sequelize) {
    return sequelize.query(query);
};

/**
 * 
 * @param {*} knex 
 * @param {*} database
 * @description Return all tables (includes views) 
 */
const getListOfTables = function (knex, database) {
    const query = `SHOW FULL TABLES IN ??`;
    return knex.raw(query, [database]);
}

const selectView = function (knex, view) {
    const query = `SELECT * FROM ??`;
    const parameters = [view];

    return knex.raw(query, parameters).
        then(data => {
            let res = JSON.stringify(data);
            let temp = JSON.parse(res);
            return Promise.resolve(temp);
        });
}

module.exports = {
    runRawQuery,
    runRawQuerySequelize,
    getListOfTables,
    selectView
};
