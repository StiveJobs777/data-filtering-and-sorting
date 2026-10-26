const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER },
  genre: { type: DataTypes.STRING },
});
