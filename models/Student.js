const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Student', {
  name: { type: DataTypes.STRING, allowNull: false },
  group: { type: DataTypes.STRING },
});
