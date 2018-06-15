/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsCampaignSettings', {
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
    campaignName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Campaign name'
    },
    campaignTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      references: {
        model: 'ams campaign types',
        key: 'ID'
      },
      field: 'Campaign Type ID'
    },
    campaignStatusId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
      references: {
        model: 'ams campaign statuses',
        key: 'ID'
      },
      field: 'Campaign Status ID'
    },
    dailyBudget: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Daily Budget'
    },
    duration: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Duration'
    }
  }, {
    tableName: 'ams campaign settings'
  });
};
