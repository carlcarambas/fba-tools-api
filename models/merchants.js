/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchants', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    merchantId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: 'MerchantID'
    },
    merchantName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'MerchantName'
    },
    accessKey: {
      type: "VARBINARY(128)",
      allowNull: false,
      field: 'AccessKey'
    },
    secretKey: {
      type: "VARBINARY(128)",
      allowNull: false,
      field: 'SecretKey'
    },
    authorizationToken: {
      type: "VARBINARY(128)",
      allowNull: true,
      field: 'AuthorizationToken'
    }
  }, {
    tableName: 'merchants'
  });
};
