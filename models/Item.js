const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Item', {
  productName: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});
