/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getFlatFileAllOrdersDataByOrderDate', {
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
    amazonOrderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amazon-order-id'
    },
    merchantOrderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'merchant-order-id'
    },
    purchaseDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'purchase-date'
    },
    lastUpdatedDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'last-updated-date'
    },
    orderStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order-status'
    },
    fulfillmentChannel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfillment-channel'
    },
    salesChannel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sales-channel'
    },
    orderChannel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order-channel'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'url'
    },
    shipServiceLevel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-service-level'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-name'
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
    itemStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-status'
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity'
    },
    currency: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'currency'
    },
    itemPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-price'
    },
    itemTax: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-tax'
    },
    shippingPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shipping-price'
    },
    shippingTax: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shipping-tax'
    },
    giftWrapPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gift-wrap-price'
    },
    giftWrapTax: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gift-wrap-tax'
    },
    itemPromotionDiscount: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-promotion-discount'
    },
    shipPromotionDiscount: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-promotion-discount'
    },
    shipCity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-city'
    },
    shipState: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-state'
    },
    shipPostalCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-postal-code'
    },
    shipCountry: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-country'
    },
    promotionIds: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'promotion-ids'
    },
    isBusinessOrder: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'is-business-order'
    },
    purchaseOrderNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'purchase-order-number'
    },
    priceDesignation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'price-designation'
    }
  }, {
    tableName: '_get_flat_file_all_orders_data_by_order_date_'
  });
};
