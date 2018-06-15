/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryAdjustmentsSummary', {
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ASIN'
    },
    sku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'SKU'
    },
    inventoryMisplaced: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Inventory misplaced'
    },
    inventoryFound: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Inventory found'
    },
    damagedByInboundCarrier: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged by inbound carrier'
    },
    damagedAtAmazonFulfillmentCenter: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged at Amazon fulfillment center'
    },
    damagedCustomerReturn: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged – customer return'
    },
    damagedAsResultOfItemDefect: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged as result of item defect'
    },
    unsellableUnfulfillableInventory: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Unsellable/unfulfillable inventory'
    },
    damagedMiscellaneous: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged – miscellaneous'
    },
    damagedByMerchant: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Damaged by merchant'
    },
    unrecoverableInventory: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Unrecoverable inventory'
    },
    destroyed: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Destroyed'
    },
    correctionForInboundShipmentReceivingDiscrepancies: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Correction for inbound shipment receiving discrepancies'
    },
    productRedefinitionTransferInFromOriginalInventoryItem: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Product redefinition & transfer in from original inventory item'
    },
    productRedefinitionTransferOutToNewInventoryItem: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Product redefinition & transfer out to new inventory item'
    },
    transferFromHoldingAccount: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Transfer from holding account'
    },
    transferToHoldingAccount: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Transfer to holding account'
    },
    softwareCorrectionOfInventoryDiscrepancies: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Software correction of inventory discrepancies'
    },
    total: {
      type: "DOUBLE",
      allowNull: true,
      field: 'TOTAL'
    }
  }, {
    tableName: 'inventory_adjustments_summary'
  });
};
