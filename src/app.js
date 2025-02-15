const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routers');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./db/db');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
server.use(cookieParser());

server.use('/api/v1/', router)

console.log(sequelize.models, 'MODELOS');
const { Product, Type } = sequelize.models;

Type.hasMany(Product);
Product.belongsTo(Type);

module.exports = server;