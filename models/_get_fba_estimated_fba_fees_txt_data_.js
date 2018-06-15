/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getFbaEstimatedFbaFeesTxtData', {
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
    sku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sku'
    },
    fnsku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fnsku'
    },
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-name'
    },
    productGroup: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-group'
    },
    brand: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'brand'
    },
    fulfilledBy: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfilled-by'
    },
    yourPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'your-price'
    },
    salesPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sales-price'
    },
    longestSide: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'longest-side'
    },
    medianSide: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'median-side'
    },
    shortestSide: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shortest-side'
    },
    lengthAndGirth: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'length-and-girth'
    },
    unitOfDimension: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'unit-of-dimension'
    },
    itemPackageWeight: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-package-weight'
    },
    unitOfWeight: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'unit-of-weight'
    },
    productSizeTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-size-tier'
    },
    currency: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'currency'
    },
    estimatedFeeTotal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-fee-total'
    },
    estimatedReferralFeePerUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-referral-fee-per-unit'
    },
    estimatedVariableClosingFee: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-variable-closing-fee'
    },
    estimatedOrderHandlingFeePerOrder: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-order-handling-fee-per-order'
    },
    estimatedPickPackFeePerUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-pick-pack-fee-per-unit'
    },
    estimatedWeightHandlingFeePerUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-weight-handling-fee-per-unit'
    },
    expectedFulfillmentFeePerUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'expected-fulfillment-fee-per-unit'
    }
  }, {
    tableName: '_get_fba_estimated_fba_fees_txt_data_'
  });
};
