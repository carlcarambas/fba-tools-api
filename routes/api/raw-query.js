const router = require('express').Router();
const serviceHandler = require(`${__dirname}/helpers/common-helper`).serviceHandler;

const rawQueryRunnerService = require('../../services/raw-query-runner');

// router.post('/', serviceHandler(rawQueryRunnerService.runRawQuery, (req, res, next) => [req.body.query, []]));
// router.post('/sequelize', serviceHandler(rawQueryRunnerService.runRawQuerySequelize, req => [req.body.query, []]));
router.post('/view', serviceHandler(rawQueryRunnerService.runRawSelectViewTable, req => [req.body.view, []]))
router.get('/tables', serviceHandler(rawQueryRunnerService.getListOfTables));

module.exports = router;