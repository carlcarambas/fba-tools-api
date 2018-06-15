/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getAmazonFulfilledShipmentsData', {
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
    shipmentId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shipment-id'
    },
    shipmentItemId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'shipment-item-id'
    },
    amazonOrderItemId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amazon-order-item-id'
    },
    merchantOrderItemId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'merchant-order-item-id'
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
    reportingDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'reporting-date'
    },
    buyerEmail: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'buyer-email'
    },
    buyerName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'buyer-name'
    },
    buyerPhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'buyer-phone-number'
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
    quantityShipped: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity-shipped'
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
    shipServiceLevel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-service-level'
    },
    recipientName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'recipient-name'
    },
    shipAddress1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-address-1'
    },
    shipAddress2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-address-2'
    },
    shipAddress3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-address-3'
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
    shipPhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ship-phone-number'
    },
    billAddress1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-address-1'
    },
    billAddress2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-address-2'
    },
    billAddress3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-address-3'
    },
    billCity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-city'
    },
    billState: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-state'
    },
    billPostalCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-postal-code'
    },
    billCountry: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bill-country'
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
    carrier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'carrier'
    },
    trackingNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'tracking-number'
    },
    estimatedArrivalDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'estimated-arrival-date'
    },
    fulfillmentCenterId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfillment-center-id'
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
    }
  }, {
    tableName: '_get_amazon_fulfilled_shipments_data_'
  });
};
