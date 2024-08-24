const Router = require('express');
const { getAllUser } = require('../../controllers/user/getAllUser');
const { createUser } = require('../../controllers/user/createUser');
const { login } = require('../../controllers/user/login');
const { checkAuth } = require('../../auth/checkAuth');
const { chackRoleAuth } = require('../../middleware/checkRoleAuth');
const { adminUser } = require('../../controllers/user/adminUser');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const userRouter = Router();

// GET
userRouter.get('/', checkAuth, chackRoleAuth, getAllUser);

// POST
userRouter.post('/', createUser);
userRouter.post('/login', login);

// PATCH
userRouter.patch('/:id', checkAuth, chackRoleAuth, adminUser);

module.exports = userRouter;