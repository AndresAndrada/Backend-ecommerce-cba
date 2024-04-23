const { Product } = require("../../db/db");

const getAllProducts = async (req, res) => {
    try {
        console.log('ENTRE');
        const productoFind = await Product.findAll();
        res.send(productoFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getAllProducts };