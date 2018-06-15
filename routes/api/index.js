const router = require('express').Router();

router.use('/merchant', require('./merchants'));

module.exports = router;