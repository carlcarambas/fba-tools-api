/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerReturnsVsReimbursements', {
    merchantName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'MerchantName'
    },
    amazonOrderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amazon-order-id'
    },
    lastUpdatedDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'last-updated-date'
    },
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin'
    },
    orderStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order-status'
    },
    purchaseDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'purchase-date'
    },
    paymentsDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'payments-date'
    },
    shipmentDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shipment-date'
    },
    returnDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'return-date'
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity'
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
    reimbursementDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reimbursement-date'
    },
    amountTotal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amount-total'
    },
    quantityReimbursedInventory: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity-reimbursed-inventory'
    }
  }, {
    tableName: 'customer_returns_vs_reimbursements'
  });
};
