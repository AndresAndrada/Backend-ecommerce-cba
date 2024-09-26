const { Product, Type } = require("../../db/db");

const getAllProducts = async (req, res) => {
    try {
        const productFind = await Product.findAll({
            include: [
                {
                    model: Type,
                    attributes: ['name_type']
                },
            ]
        }
        );
        res.send(productFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getAllProducts };