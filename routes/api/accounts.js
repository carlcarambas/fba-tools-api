const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const accountService = require(`../../services/accounts`);

router.post('/', serviceHandler(accountService.insertAccount, req => [req.body.email, req.body.password, req.body.merchantId]));
router.post('/login', serviceHandler(accountService.validateLogin, req => [req.body.email, req.body.password]));
router.post('/token', serviceHandler(accountService.validateToken, req => [req.body]));

module.exports = router;