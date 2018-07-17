
/**
 * 
 * @param {*} knex 
 * @param {*} userAccount
 *  email
 *  password
 *  merchantid 
 */
const insertAccount = (knex, userAccount) => knex('account').insert(userAccount);
const getAccountByEmailAddress = (knex, emailAddress) => knex('account').where('email', emailAddress).select();

module.exports = {
    insertAccount,
    getAccountByEmailAddress,
};
