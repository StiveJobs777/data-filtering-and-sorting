const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Enrollment', {
  enrolledAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  grade: { type: DataTypes.INTEGER },
});
