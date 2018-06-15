const DataTypes = require('sequelize');
const model = require(`../models/_get_merchant_listings_all_data_.js`);

async function getAll(db_connection) {

    let newModel = model(db_connection, DataTypes);
    try {
        await new Promise(async (res, rej) => {
            let getAll = newModel.getAll()
                .then(res)
                .catch(rej)
            await getAll;
        })
    } catch (err){
        console.log(err);
        return Promise.reject();
    }
};

module.exports = {
    getAll
};