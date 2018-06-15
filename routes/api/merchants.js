const router = require('express').Router();
const merchantService = require(`../../services/merchants`);

const db = require('../../database/db_connection');
const sequelize = require('sequelize');
const merchantModel = require(`../../models/_get_merchant_listings_all_data_`);

const createError = require('http-errors');

let newModel = merchantModel(db, sequelize);

router.get('/', getAllMerchantData)
router.get('/all', getMerchantData);

async function getAllMerchantData(req, res, next) {
    await merchantService.getAllMerchantData().then(data => {
        res.json(data);
    })
};

function getMerchantData(req, res, next) {
    newModel.findAll()
        .then(data => {
            res.json(data);
        })
        .then(() => {
            db.close().then(() => console.log('Successfully closed'));
            return Promise.resolve();
        })
        .catch(err => {
            console.log(err)
            db.close().then(() => console.log('Error, successfully closed'));
            next(createError(500));
        });
}

module.exports = router;
