const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Order', {
  number: { type: DataTypes.STRING, allowNull: false, unique: true },
  status: { type: DataTypes.ENUM('new', 'paid', 'shipped'), defaultValue: 'new' },
});
