const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Card = sequelize.define('Card', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    scryfallId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scryfallUri: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tcgplayerId: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Cards',
    timestamps: false
});

module.exports = Card;
