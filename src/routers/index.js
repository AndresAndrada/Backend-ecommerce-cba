const { Router } = require('express');
const productRouter = require('./productRouter/productRouter');
const userRouter = require('./userRouter/userRouter');
const typeRouter = require('./typeRouter/typeRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/types', typeRouter);

module.exports = router;