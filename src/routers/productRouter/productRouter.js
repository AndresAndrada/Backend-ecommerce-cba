const Router = require('express');
const { getAllProducts } = require('../../controllers/product/getAllProduct');
const { checkAuth } = require('../../auth/checkAuth');
const { createProduct } = require('../../controllers/product/createProducto');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const productRouter = Router();

// GET
productRouter.get('/', checkAuth, getAllProducts);

// POST
productRouter.post('/', checkAuth, createProduct);

module.exports = productRouter;