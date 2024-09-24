const Router = require('express');
const { checkAuth } = require('../../auth/checkAuth');
const { getAllType } = require('../../controllers/type/getAllType');
const { createType } = require('../../controllers/type/createType');
const { checkRoleAuth } = require('../../middleware/checkRoleAuth');
const { deleteType } = require('../../controllers/type/deleteType');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const typeRouter = Router();

// GET
typeRouter.get('/', getAllType);

// POST
typeRouter.post('/', checkAuth, checkRoleAuth, createType);

// DELETE
typeRouter.delete('/:idType', checkAuth, checkRoleAuth, deleteType);

module.exports = typeRouter;