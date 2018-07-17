const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const accountService = require(`../../services/accounts`);

router.post('/', serviceHandler(accountService.insertAccount, req => [req.body.email, req.body.password, req.body.merchantId]));
router.post('/login', serviceHandler(accountService.validateLogin, req => [req.body.email, req.body.password]));

module.exports = router;