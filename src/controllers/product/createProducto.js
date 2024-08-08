const { Product } = require("../../db/db");

const createProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProducto = await Product.create(product);
        res.send({ newProducto, message: 'Create product succesfull' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createProduct };