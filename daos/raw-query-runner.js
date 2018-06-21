/**
 * 
 * @param {*} query String. Raw SQL query  to be run 
 * @param {*} parameters Array. Parameters to be prepared with query (if needed)
 * @param {*} knex Object. Knex connection
 */
const runRawQuery = function(query, parameters, knex){
    return knex.raw(query, parameters);
};

module.exports = {
    runRawQuery
};
