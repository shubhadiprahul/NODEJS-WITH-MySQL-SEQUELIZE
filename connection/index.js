const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');

}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.wholesalers = require('../model/wholsaler')(sequelize,DataTypes)
db.retailers = require('../model/retailer')(sequelize,DataTypes)
db.stocks = require('../model/stock')(sequelize,DataTypes)

db.sequelize.sync()
 .then(() => {
     console.log('yes or re-sync!');
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });

module.exports = db;