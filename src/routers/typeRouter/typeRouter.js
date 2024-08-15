const Router = require('express');
const { checkAuth } = require('../../auth/checkAuth');
const { getAllType } = require('../../controllers/type/getAllType');
const { createType } = require('../../controllers/type/createType');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const typeRouter = Router();

// GET
typeRouter.get('/', checkAuth, getAllType);

// POST
typeRouter.post('/', checkAuth, createType);

module.exports = typeRouter;