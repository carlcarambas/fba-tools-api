const { knexConnection } = require('../database/db_connection');
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
    });
}

module.exports = {
    runRawQuery
}
