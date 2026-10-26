const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Author', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING },
});
