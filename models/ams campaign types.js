/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsCampaignTypes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Type'
    }
  }, {
    tableName: 'ams campaign types'
  });
};
