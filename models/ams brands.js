/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amsBrands', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    entityId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Entity ID'
    },
    brandName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Brand Name'
    }
  }, {
    tableName: 'ams brands'
  });
};
