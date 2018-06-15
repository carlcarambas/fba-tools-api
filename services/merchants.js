const db_connection = require(`../database/db_connection`);
const getMerchantListingsAllDataDao = require(`../daos/_get_merchant_listings_all_data_`);

async function getAllMerchantData() {
    try {
        await getMerchantListingsAllDataDao.getAll(sequelize, Sequelize)
            .then(data => Promise.resolve(data))
            .then(() => {
                return db_connection.connectionManager.close();
            });
    } catch (err) {
        console.log(err);
        return db_connection.connectionManager.close();
    }
}

module.exports = {
    getAllMerchantData
}