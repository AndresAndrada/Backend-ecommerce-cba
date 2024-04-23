const Router = require('express');
const { getAllProducts } = require('../../controllers/product/getAllProduct');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const productRouter = Router();

productRouter.get('/', getAllProducts);
// productRouter.post('/', registerProduct);

module.exports = productRouter;