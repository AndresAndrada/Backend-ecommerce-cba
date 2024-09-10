const Router = require('express');
const { getAllProducts } = require('../../controllers/product/getAllProduct');
const { checkAuth } = require('../../auth/checkAuth');
const { createProduct } = require('../../controllers/product/createProducto');
const { patchImageProduct } = require('../../controllers/product/patchImageProducto');
const { deleteProduct } = require('../../controllers/product/deleteProduct');
const { checkRoleAuth } = require('../../middleware/checkRoleAuth');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const productRouter = Router();

// GET
productRouter.get('/', getAllProducts);

// POST
productRouter.post('/', checkAuth, createProduct);

// PATCH
productRouter.patch('/image/:idProduct', checkAuth, patchImageProduct);

// DELETE
productRouter.delete('/:idProduct', checkAuth, checkRoleAuth, deleteProduct);

module.exports = productRouter;