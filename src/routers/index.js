const { Router } = require('express');
const productRouter = require('./productRouter/productRouter');

const router = Router();

router.use('/products', productRouter);

module.exports = router;