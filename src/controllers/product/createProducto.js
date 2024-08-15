const { Product } = require("../../db/db");

const createProduct = async (req, res) => {
    // const { name_product } = req.query;
    const { name_product } = req.body;
    try {
        console.log(name_product, 'NAME');
        const productFind = await Product.findOne({
            where: { name_product }
        });
        console.log(productFind, 'FIND');
        if (productFind?.id) return res.status(300).send({ message: 'Product all exists' });
        const newProducto = await Product.create(req.body);
        res.send({ newProducto, message: 'Create product succesfull' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createProduct };