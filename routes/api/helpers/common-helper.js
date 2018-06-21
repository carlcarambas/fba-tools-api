/**
 * Handles service execution and responds to user (API Express version).
 * Web socket has a similar handler implementation.
 * @param promise Service Promise. I.e. getUser.
 * @param params A function (req, res, next), all of which are optional
 * that maps our desired service parameters. I.e. (req) => [req.params.username, ...].
 */
const serviceHandler = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const result = await promise(...boundParams);
        return res.json(result || { message: 'Success' });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {
    serviceHandler
};