const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const merchantService = require(`../../services/merchants`);

router.get('/all-data', serviceHandler(merchantService.getAllMerchantData));
router.get('/', serviceHandler(merchantService.getMerchants));

module.exports = router;