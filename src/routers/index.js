const { Router } = require('express');
const productRouter = require('./productRouter/productRouter');
const userRouter = require('./userRouter/userRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/products', productRouter);

module.exports = router;