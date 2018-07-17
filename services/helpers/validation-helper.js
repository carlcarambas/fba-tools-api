const bcrypt = require('bcrypt');

/**
 * 
 * @param {*} email 
 */
const isEmailValid = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
};

/**
 * 
 * @param {*} plainTextPassword 
 * @param {*} hashedPassword 
 */
const validatePassword = (plainTextPassword, hashedPassword) => {
    return new Promise(async (resolve, reject) => {

        try {
            const result = await bcrypt.compare(plainTextPassword, hashedPassword);
            return resolve(result);
        } catch (error) {
            const err = {
                error,
                message: `Error with decrypting password`,
            };
            return reject(err);
        }

    });
};

/**
 * 
 * @param {*} password 
 */
const encryptPassword = (password) => {
    return new Promise(async (resolve, reject) => {

        try {
            const encryptedPassword = await bcrypt.hash(password, 10);
            return resolve(encryptedPassword);
        } catch (error) {
            const err = {
                error: Error("Error with encrypting password"),
                message: `Error with encrypting password`,
            };
            return reject(error);
        }

    });
};

module.exports = {
    isEmailValid,
    validatePassword,
    encryptPassword,
};