const Router = require('express');
const { getAllProducts } = require('../../controllers/product/getAllProduct');
const { checkAuth } = require('../../auth/checkAuth');
const { createProduct } = require('../../controllers/product/createProducto');
const { patchImageProduct } = require('../../controllers/product/patchImageProducto');
const { deleteProduct } = require('../../controllers/product/deleteProduct');
const { checkRoleAuth } = require('../../middleware/checkRoleAuth');
const { upDataPromotion } = require('../../controllers/product/upDataPromotion');
const { patchProduct } = require('../../controllers/product/patchProduct');
const { getProductsById } = require('../../controllers/product/getProductsById');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const productRouter = Router();

// GET
productRouter.get('/', getAllProducts);
productRouter.get('/:idProduct', getProductsById);

// POST
productRouter.post('/', checkAuth, checkRoleAuth, createProduct);

// PATCH
productRouter.patch('/:idProduct', checkAuth, checkRoleAuth, patchProduct);
productRouter.patch('/image/:idProduct', checkAuth, checkRoleAuth, patchImageProduct);
productRouter.patch('/promotion/:idProduct', upDataPromotion);

// DELETE
productRouter.delete('/:idProduct', checkAuth, checkRoleAuth, deleteProduct);

module.exports = productRouter;