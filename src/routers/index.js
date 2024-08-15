const { Router } = require('express');
const productRouter = require('./productRouter/productRouter');
const userRouter = require('./userRouter/userRouter');
const typeRouter = require('./typeRouter/typeRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/type', typeRouter);

module.exports = router;