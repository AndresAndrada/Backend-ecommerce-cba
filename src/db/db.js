require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Product } = require('../models/Product');
const { User } = require('../models/User');
const { Category } = require('../models/Category');
const { Type } = require('../models/Type');
// const { Reviews } = require('../models/Review');

const { URL_POSTGRESQL, PORT_POSTGRESQL } = process.env

const sequelize = new Sequelize(URL_POSTGRESQL, {
    logging: false,
    native: false,
    port: PORT_POSTGRESQL
});

User(sequelize);
Product(sequelize);
Category(sequelize);
Type(sequelize);
// Reviews(sequelize);

module.exports = { sequelize, ...sequelize.models };