const { sequelizeConnection } = require(`../database/db_connection`);
const getMerchantListingsAllDataDao = require(`../daos/_get_merchant_listings_all_data_`);
const getMerchantsDao = require('../daos/merchants');

async function getAllMerchantData() {
    const merchantData = await getMerchantListingsAllDataDao.getAllMerchantListingData(sequelizeConnection);
    return new Promise((resolve, reject) => {
        Promise.resolve()
            .then(() => {
                return resolve(merchantData);
            });
    });
}

async function getMerchants() {
    const merchantData = await getMerchantsDao.getAll(sequelizeConnection);
    return new Promise((resolve, reject) => {
        Promise.resolve()
            .then(() => {
                return resolve(merchantData);
            });
    });
}


module.exports = {
    getAllMerchantData,
    getMerchants
};
