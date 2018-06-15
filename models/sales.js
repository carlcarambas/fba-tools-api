/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    merchantIdid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      field: 'merchantIDID'
    },
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ASIN'
    },
    date: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Date'
    },
    ordersPromo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Orders (Promo)'
    },
    ordersFull: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Orders (Full)'
    },
    ordersTotal: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      field: 'Orders (Total)'
    },
    unitsPromo: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Units (Promo)'
    },
    unitsFull: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Units (Full)'
    },
    unitsTotal: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Units (Total)'
    },
    unitsShipped: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Units Shipped'
    },
    unitsReturned: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Units Returned'
    },
    sales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Sales'
    },
    refunds: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Refunds'
    }
  }, {
    tableName: 'sales'
  });
};
