/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getFbaFulfillmentCustomerReturnsData', {
    merchantIdid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true,
      field: 'merchantIDID'
    },
    sequenceNbr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'sequenceNbr'
    },
    returnDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'return-date'
    },
    orderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order-id'
    },
    sku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sku'
    },
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin'
    },
    fnsku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fnsku'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-name'
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity'
    },
    fulfillmentCenterId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfillment-center-id'
    },
    detailedDisposition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'detailed-disposition'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reason'
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'status'
    },
    licensePlateNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'license-plate-number'
    },
    customerComments: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'customer-comments'
    }
  }, {
    tableName: '_get_fba_fulfillment_customer_returns_data_'
  });
};
