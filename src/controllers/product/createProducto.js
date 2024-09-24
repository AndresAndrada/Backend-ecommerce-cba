const { Product, Type } = require("../../db/db");

const createProduct = async (req, res) => {
    // const { name_product } = req.query;
    const { product, idType } = req.body;
    try {
        const productFind = await Product.findOne({
            where: { name_product: product.name_product }
        });
        const typefind = await Type.findOne({ where: { id: idType } });
        console.log(typefind, 'TYPE FIND');
        if (productFind?.id) return res.send({ message: 'Product all exists' });
        const newProducto = await Product.create(product);
        console.log(newProducto, 'NEWPRODUCT');

        const type_product = await newProducto.setType(idType);
        console.log(type_product, 'TYPE RELACION');

        res.send({ newProducto, message: 'Create product succesfull' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createProduct };