const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  publishedAt: { type: DataTypes.DATE, allowNull: false },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft',
  },
});
