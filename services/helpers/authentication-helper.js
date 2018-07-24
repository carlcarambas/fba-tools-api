require('dotenv').config();

const jwt = require('jsonwebtoken');
const envSecret = process.env.JWT_SECRET;

/**
 * 
 * @param {*} tokenData 
 * @param {*} expiry Defaults to 1 day
 * @param {*} secret Defaults to environment secret
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

module.exports = {
    createToken,
    decodeToken,
}