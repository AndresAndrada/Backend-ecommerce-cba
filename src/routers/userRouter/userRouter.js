const Router = require('express');
const { getAllUser } = require('../../controllers/user/getAllUser');
const { createUser } = require('../../controllers/user/createUser');
const { login } = require('../../controllers/user/login');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const userRouter = Router();

// GET
userRouter.get('/', getAllUser);

// POST
userRouter.post('/', createUser);
userRouter.post('/login', login);

module.exports = userRouter;