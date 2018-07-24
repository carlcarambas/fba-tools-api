const { knexConnectionAccount } = require(`../database/db_connection`);
const { isEmailValid, encryptPassword, validatePassword, } = require(`./helpers/validation-helper`);

const accountsDao = require(`../daos/accounts`);

const authenticationHelper = require('./helpers/authentication-helper');

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @param {*} merchantId 
 */
function insertAccount(email, password, merchantId) {
    return new Promise(async (resolve, reject) => {

        if (!isEmailValid(email)) {            
            const err = {
                error : Error("Email is invalid"),
                message: `'${email}' email is invalid`,
            };
            return reject(err);
        }

        try {
            const userAccount = {
                email,
                password: await encryptPassword(password),
                merchantid: merchantId,
            }

            const accountId = await accountsDao.insertAccount(knexConnectionAccount, userAccount);

            return resolve(accountId);

        } catch (error) {
            return reject(error);
        }

    });
}

/**
 * 
 * @param {*} email 
 * @param {*} password
 * @todo IMPLEMENT JWT 
 */
function validateLogin(email, password){
    return new Promise(async (resolve, reject) => {
        try {
            const [userAccount] = await accountsDao.getAccountByEmailAddress(knexConnectionAccount, email);
            const result = await validatePassword(password, userAccount.password);

            /**
             * @todo CHECK UNHANDLED PROMISE REJECTION
             */

            if(result) {
                return resolve(result);
            } else {
                return reject(result);
            }
        } catch (error) {
            return reject(error);            
        }
    });
}

function validateToken(tokenBody){
    return new Promise(async (resolve, reject) => {
        try {
            let token = await authenticationHelper.createToken(tokenBody);
            let decodedToken = await authenticationHelper.decodeToken(token);
            return resolve({
                token,
                decodedToken
            });
        } catch (error) {
            return reject(error);            
        }
    });
}

module.exports = {
    insertAccount,
    validateLogin,
    validateToken,
};
