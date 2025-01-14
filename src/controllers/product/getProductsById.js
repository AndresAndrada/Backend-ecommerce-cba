const { Product } = require("../../db/db");

const getProductsById = async (req, res, next) => {
    const { idProduct } = req.params;
    try {
        const findProduct = await Product.findByPk(idProduct);
        console.log(findProduct, 'FIND PRODUCT');
        findProduct.id ? res.send(findProduct) : res.status(404).send({ message: 'Product not found' })
    } catch (error) {
        next(error)
    }
}

module.exports = { getProductsById };