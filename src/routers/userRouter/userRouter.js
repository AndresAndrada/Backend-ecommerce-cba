const Router = require('express');
const { getAllUser } = require('../../controllers/user/getAllUser');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const userRouter = Router();

userRouter.get('/', getAllUser);
// userRouter.post('/', registerProduct);

module.exports = userRouter;