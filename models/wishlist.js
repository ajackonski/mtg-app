const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const User = require('./user');
const Card = require('./card');

const Wishlist = sequelize.define('Wishlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    cardId: {
        type: DataTypes.INTEGER,
        references: {
            model: Card,
            key: 'id'
        }
    }
}, {
    tableName: 'Wishlists'
});

module.exports = Wishlist;
