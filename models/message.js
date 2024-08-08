const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const Match = require('./match');
const User = require('./user');

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    matchId: {
        type: DataTypes.INTEGER,
        references: {
            model: Match,
            key: 'id'
        }
    },
    senderId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'Messages'
});

module.exports = Message;
