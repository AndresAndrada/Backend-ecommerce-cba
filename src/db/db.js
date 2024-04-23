require('dotenv').config();
const { Sequelize } = require('sequelize');
// const { User } = require('../models/User');
const { Product } = require('../models/Product');
// const { Reviews } = require('../models/Review');
// const { Type } = require('../models/Type');

const { URL_POSTGRESQL, PORT_POSTGRESQL } = process.env

const sequelize = new Sequelize(URL_POSTGRESQL, {
    logging: false,
    native: false,
    port: PORT_POSTGRESQL
});

// User(sequelize);
Product(sequelize);
// Reviews(sequelize);
// Type(sequelize);

module.exports = { sequelize, ...sequelize.models };