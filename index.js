const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const port = process.env.PORT || 8080;

const sequelize = new Sequelize('mtg_trade', 'postgres', 'Nov1994?', {
  host: 'localhost',
  dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

const User = require('./models/user');
const Group = require('./models/group');
const UserGroup = require('./models/user-groups');
const Card = require('./models/card');
const Wishlist = require('./models/wishlist');
const Tradelist = require('./models/tradelist');
const Match = require('./models/match');
const Message = require('./models/message');


User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

User.hasMany(Wishlist, { foreignKey: 'userId' });
Wishlist.belongsTo(User, { foreignKey: 'userId' });
Card.hasMany(Wishlist, { foreignKey: 'cardId' });
Wishlist.belongsTo(Card, { foreignKey: 'cardId' });

User.hasMany(Tradelist, { foreignKey: 'userId' });
Tradelist.belongsTo(User, { foreignKey: 'userId' });
Card.hasMany(Tradelist, { foreignKey: 'cardId' });
Tradelist.belongsTo(Card, { foreignKey: 'cardId' });

User.hasMany(Match, { foreignKey: 'user1Id' });
User.hasMany(Match, { foreignKey: 'user2Id' });
Match.belongsTo(User, { as: 'User1', foreignKey: 'user1Id' });
Match.belongsTo(User, { as: 'User2', foreignKey: 'user2Id' });

Card.hasMany(Match, { foreignKey: 'card1Id' });
Card.hasMany(Match, { foreignKey: 'card2Id' });
Match.belongsTo(Card, { as: 'Card1', foreignKey: 'card1Id' });
Match.belongsTo(Card, { as: 'Card2', foreignKey: 'card2Id' });

Match.hasMany(Message, { foreignKey: 'matchId' });
Message.belongsTo(Match, { foreignKey: 'matchId' });
User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('All tables have been created.');
}).catch(err => {
    console.error('Unable to create tables:', err);
});
