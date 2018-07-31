const router = require('express').Router();
const serviceHandler = require('./helpers/common-helper').serviceHandler;
const accountService = require(`../../services/accounts`);
const authHelper = require('./helpers/authentication-helper');

router.post('/', serviceHandler(accountService.insertAccount, req => [req.body.email, req.body.password, req.body.merchantId]));
router.post('/login', serviceHandler(accountService.validateLogin, req => [req.body.email, req.body.password]));
router.post('/token', serviceHandler(accountService.validateToken, req => [req.body]));
router.get('/valid', authHelper.getJwtMiddleware(), (req, res) => req.user ? res.json({ result: true }) : res.status(500).json({ result: false }));

module.exports = router;