/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getFbaFulfillmentInventoryAdjustmentsData', {
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
    adjustedDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'adjusted-date'
    },
    transactionItemId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'transaction-item-id'
    },
    fnsku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fnsku'
    },
    sku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sku'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-name'
    },
    fulfillmentCenterId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfillment-center-id'
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reason'
    },
    disposition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'disposition'
    }
  }, {
    tableName: '_get_fba_fulfillment_inventory_adjustments_data_'
  });
};
