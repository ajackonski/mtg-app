const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const User = require('./user');
const Card = require('./card');

const Match = sequelize.define('Match', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user1Id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    user2Id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    card1Id: {
        type: DataTypes.INTEGER,
        references: {
            model: Card,
            key: 'id'
        }
    },
    card2Id: {
        type: DataTypes.INTEGER,
        references: {
            model: Card,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'Matches'
});

module.exports = Match;
