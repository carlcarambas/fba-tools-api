const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const rawQueryRunnerService = require('../../services/raw-query-runner');

router.post('/', serviceHandler(rawQueryRunnerService.runRawQuery, (req, res, next) => [req.body.query, []]));

module.exports = router;