const dbConnection = require(`../database/db_connection`);
const getMerchantListingsAllDataDao = require(`../daos/_get_merchant_listings_all_data_`);

async function getAllMerchantData() {
    const merchantData = await getMerchantListingsAllDataDao.getAllMerchantListingData(dbConnection);
    return new Promise((resolve, reject) => {
        Promise.resolve()
            .then(() => {
                return resolve(merchantData);
            })
            .then(() => {
                return dbConnection.close().then(() => {
                    console.log('database connection succesfully closed');
                })
            })
    });
}


module.exports = {
    getAllMerchantData
};