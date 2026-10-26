const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
});
