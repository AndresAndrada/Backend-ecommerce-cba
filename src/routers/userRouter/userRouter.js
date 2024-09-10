const Router = require('express');
const { getAllUser } = require('../../controllers/user/getAllUser');
const { createUser } = require('../../controllers/user/createUser');
const { login } = require('../../controllers/user/login');
const { checkAuth } = require('../../auth/checkAuth');
const { checkRoleAuth } = require('../../middleware/checkRoleAuth');
const { adminUser } = require('../../controllers/user/adminUser');
const { patchPassword } = require('../../controllers/user/patchPassword');
const { deleteUser } = require('../../controllers/user/deleteUser');
// const { registerProduct } = require('../../controllers/product/registerProduct');

const userRouter = Router();

// GET
userRouter.get('/', checkAuth, checkRoleAuth, getAllUser);

// POST
userRouter.post('/', createUser);
userRouter.post('/login', login);

// PATCH
userRouter.patch('/:id', checkAuth, checkRoleAuth, adminUser);
userRouter.patch('/password/:idUser', checkAuth, checkRoleAuth, patchPassword);

// DELETE
userRouter.delete('/:idUser', checkAuth, checkRoleAuth, deleteUser);


module.exports = userRouter;