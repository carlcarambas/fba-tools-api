/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getMerchantListingsAllData', {
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
    itemName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-name'
    },
    itemDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-description'
    },
    listingId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'listing-id'
    },
    sellerSku: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'seller-sku'
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'price'
    },
    quantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'quantity'
    },
    openDate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'open-date'
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'image-url'
    },
    itemIsMarketplace: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-is-marketplace'
    },
    productIdType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-id-type'
    },
    zshopShippingFee: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'zshop-shipping-fee'
    },
    itemNote: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-note'
    },
    itemCondition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'item-condition'
    },
    zshopCategory1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'zshop-category1'
    },
    zshopBrowsePath: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'zshop-browse-path'
    },
    zshopStorefrontFeature: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'zshop-storefront-feature'
    },
    asin1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin1'
    },
    asin2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin2'
    },
    asin3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'asin3'
    },
    willShipInternationally: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'will-ship-internationally'
    },
    expeditedShipping: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'expedited-shipping'
    },
    zshopBoldface: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'zshop-boldface'
    },
    productId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product-id'
    },
    bidForFeaturedPlacement: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bid-for-featured-placement'
    },
    addDelete: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'add-delete'
    },
    pendingQuantity: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pending-quantity'
    },
    fulfillmentChannel: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fulfillment-channel'
    },
    merchantShippingGroup: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'merchant-shipping-group'
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: '_get_merchant_listings_all_data_'
  });
};
