/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salesLast30Days', {
    merchantIdid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      field: 'merchantIDID'
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'IMAGE'
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'PRODUCT'
    },
    asin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ASIN'
    },
    sales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'SALES'
    },
    units: {
      type: "VARBINARY(91)",
      allowNull: true,
      field: 'UNITS'
    },
    orders: {
      type: "VARBINARY(143)",
      allowNull: true,
      field: 'ORDERS'
    },
    refunds: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'REFUNDS'
    }
  }, {
    tableName: 'sales_last_30_days'
  });
};
