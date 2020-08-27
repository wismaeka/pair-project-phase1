'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sales.belongsTo(models.Customer,{foreignKey: 'customerId'})
      Sales.belongsTo(models.Product,{foreignKey: 'productId'})
      
    }
  };
  Sales.init({
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    order_qty : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};