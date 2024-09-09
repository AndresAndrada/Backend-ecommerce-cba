const { Product } = require("../../db/db");
const { encryptPassword } = require("../../middleware/encryptPassword");
const { SALT } = process.env;

const patchProduct = async (req, res) => {
    const { idProduct } = req.params;
    const product = req.body;
    try {
        const productFind = await Product.findOne({ where: { name_product: product.name_product } });
        if (productFind?.dataValues) {
            const userPassword = await Product.update(product, { where: { id: idProduct } });
            res.send({ userPassword, message: 'Modified already exists' });
        } else res.status(309).send({ message: 'Product all exist' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchProduct };