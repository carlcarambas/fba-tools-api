const router = require('express').Router();

router.use('/merchants', require('./merchants'));
router.use('/raw', require('./raw-query'));
router.use('/accounts', require('./accounts'));

module.exports = router;