const DataTypes = require('sequelize');
const model = require(`../models/merchants`);

async function getAll(dbConnection) {
    let newModel = model(dbConnection, DataTypes)
    return newModel.findAll({attributes: ['id','merchantId', 'merchantName']});
};


module.exports = {
    getAll
};