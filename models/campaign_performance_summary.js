/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaignPerformanceSummary', {
    brandName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Brand Name'
    },
    campaignId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Campaign ID'
    },
    campaignName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Campaign Name'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Type'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Status'
    },
    dailyBudget: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Daily Budget'
    },
    duration: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'Duration'
    },
    impressions: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Impressions'
    },
    clicks: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Clicks'
    },
    ctr: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'CTR'
    },
    detailPageViews: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Detail Page Views'
    },
    spent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Spent'
    },
    acpc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'ACPC'
    },
    unitsSold: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Units Sold'
    },
    sales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'Sales'
    },
    aCoS: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'ACoS'
    }
  }, {
    tableName: 'campaign_performance_summary'
  });
};
