const router = require('express').Router();

router.use('/merchant', require('./merchants'));
router.use('/raw', require('./raw-query'));

module.exports = router;