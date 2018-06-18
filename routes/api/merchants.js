const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const merchantService = require(`../../services/merchants`);

router.get('/', serviceHandler(merchantService.getAllMerchantData));

module.exports = router;