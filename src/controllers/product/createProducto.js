const { Product } = require("../../db/db");

const createProduct = async (req, res) => {
    const { name_produc } = req.query;
    const product = req.body;
    try {
        const productFind = await Product.findOne({ where: name_produc })
        console.log(productFind.id, 'FIND');
        const newProducto = await Product.create(product);
        res.send({ newProducto, message: 'Create product succesfull' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createProduct };