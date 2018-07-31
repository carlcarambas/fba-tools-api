require('dotenv').config();

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const envSecret = process.env.JWT_SECRET;

/**
 * 
 * @param {*} tokenData 
 * @param {*} expiry 
 * @param {*} secret 
 */
const createToken = (tokenData, expiry = 86400, secret = envSecret) => {
    return new Promise((resolve, reject) => {
        if (!tokenData) {
            return reject('Token data is invalid');
        }

        const config = {
            expiresIn: expiry
        }

        try {
            let token = jwt.sign(tokenData, secret, config);
            return resolve(token);
        } catch (error) {
            const err_return = {
                message: "Error in generating token",
                error,
            }
            return reject(err_return);
        }

    })
};

/**
 * 
 * @param {*} token 
 * @param {*} secret 
 */
const decodeToken = (token, secret = envSecret) => {
    return new Promise((resolve, reject) => {
        if(!token){
            return reject('Token is invalid');
        }
        
        try {
            let decodedToken = jwt.verify(token, secret);
            return resolve(decodedToken);
        } catch(error){
            const err_return = {
                message: "Error in generating token",
                error,
            }
            return reject(err_return);
        }

    })
};

/**
 * @desc https://github.com/auth0/express-jwt
 * @param {*} options 
 */
const getJwtMiddleware = options => {
    let middlewareOptions = { secret : envSecret };

    if (options){
        middlewareOptions = options;
        middlewareOptions.secret = middlewareOptions.secret ? middlewareOptions.secret : envSecret;
    }

    return expressJwt(middlewareOptions);
}

module.exports = {
    createToken,
    decodeToken,
    getJwtMiddleware,
}