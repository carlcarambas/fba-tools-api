/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsCampaignPerformance', {
    brandId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true,
      references: {
        model: 'ams brands',
        key: 'ID'
      },
      field: 'Brand ID'
    },
    campaignIdId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true,
      references: {
        model: 'ams campaign ids',
        key: 'ID'
      },
      field: 'Campaign ID ID'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'Date'
    },
    totalImpressions: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Total Impressions'
    },
    totalClicks: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Total Clicks'
    },
    clickThroughRate: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Click Through Rate'
    },
    detailPageViews: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Detail Page Views'
    },
    totalSpend: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Total Spend'
    },
    averageCostPerClick: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Average Cost per Click'
    },
    unitsSold: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Units Sold'
    },
    totalSales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Total Sales'
    },
    aCoS: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'ACoS'
    }
  }, {
    tableName: 'ams campaign performance'
  });
};
