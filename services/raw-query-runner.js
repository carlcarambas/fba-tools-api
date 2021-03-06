const { knexConnection, sequelizeConnection, getDatabaseConfig } = require('../database/db_connection');
const rawQueryRunnerDao = require('../daos/raw-query-runner');

/**
 * 
 * @param {*} query String 
 */
async function runRawQuery(query, params) {
    const rawQueryData = await rawQueryRunnerDao.runRawQuery(query, params, knexConnection);

    return new Promise((resolve, reject) => {
        return Promise.resolve()
            .then(() => {
                return resolve(rawQueryData)
            })
            .catch(reject)
    });
}

/**
 * 
 * @param {*} query 
 * @param {*} params 
 */
async function runRawQuerySequelize(query, params) {
    const rawQueryData = await rawQueryRunnerDao.runRawQuerySequelize(query, params, sequelizeConnection);

    return new Promise((resolve, reject) => {
        return Promise.resolve()
            .then(() => {
                return resolve(rawQueryData)
            })
            .catch(reject)
    });
}

/**
 * 
 */
async function getListOfTables(){
    const database = getDatabaseConfig('database');
    const tablesList = await rawQueryRunnerDao.getListOfTables(knexConnection, database)
    
    return new Promise((resolve, reject) => {
        return Promise.resolve()
                .then(() => {
                    return resolve(tablesList)
                })
                .catch(reject)

    });
}

/**
 * 
 * @param {*} view 
 * @param {*} params 
 */
async function runRawSelectViewTable(view, params){
    const viewData = await rawQueryRunnerDao.selectView(knexConnection, view);

    return new Promise((resolve, reject) => {
        return Promise.resolve()
                .then(() => {
                    return resolve(viewData)
                })
                .catch(reject)
    });
}

/**
 * 
 */
async function getTableData(table, params){
    const tableData = await rawQueryRunnerDao.selectTable(knexConnection, table);
    
    return new Promise((resolve, reject) => {
        return Promise.resolve()
                .then(() => {
                    return resolve(tableData)
                })
                .catch(reject)
    });
}

module.exports = {
    runRawQuery,
    runRawQuerySequelize,
    getListOfTables,
    runRawSelectViewTable,
    getTableData
}
