/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsCampaignStatuses', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Status'
    }
  }, {
    tableName: 'ams campaign statuses'
  });
};
