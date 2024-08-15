const { Product } = require("../../db/db");

const getAllProducts = async (req, res) => {
    try {
        const productFind = await Product.findAll();
        res.send(productFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getAllProducts };