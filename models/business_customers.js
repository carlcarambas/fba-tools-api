/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('businessCustomers', {
    merchantIdid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      field: 'merchantIDID'
    },
    buyerName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'buyer-name'
    },
    buyerEmail: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'buyer-email'
    }
  }, {
    tableName: 'business_customers'
  });
};
