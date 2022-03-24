const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Birthday = sequelize.define('birthday', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false }, // Will store in UTC, ISO format
    notes: { type: DataTypes.STRING, allowNull: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Birthday;
};
