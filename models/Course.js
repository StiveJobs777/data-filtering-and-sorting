const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Course', {
  title: { type: DataTypes.STRING, allowNull: false },
  credits: { type: DataTypes.INTEGER, allowNull: false },
});
