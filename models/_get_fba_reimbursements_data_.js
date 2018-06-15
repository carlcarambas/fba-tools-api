/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getFbaReimbursementsData', {
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
    approvalDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'approval-date'
    },
    reimbursementId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reimbursement-id'
    },
    caseId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'case-id'
    },
    amazonOrderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amazon-order-id'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reason'
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
    condition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'condition'
    },
    currencyUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'currency-unit'
    },
    amountPerUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amount-per-unit'
    },
    amountTotal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amount-total'
    },
    quantityReimbursedCash: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity-reimbursed-cash'
    },
    quantityReimbursedInventory: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity-reimbursed-inventory'
    },
    quantityReimbursedTotal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity-reimbursed-total'
    },
    originalReimbursementId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'original-reimbursement-id'
    },
    originalReimbursementType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'original-reimbursement-type'
    }
  }, {
    tableName: '_get_fba_reimbursements_data_'
  });
};
