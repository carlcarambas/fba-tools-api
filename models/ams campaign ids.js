/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsCampaignIds', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    campaignId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Campaign ID'
    }
  }, {
    tableName: 'ams campaign ids'
  });
};
