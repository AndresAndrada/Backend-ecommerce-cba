const { Product } = require("../../db/db");
const { encryptPassword } = require("../../middleware/encryptPassword");
const { SALT } = process.env;

const patchProduct = async (req, res) => {
    const { idProduct } = req.params;
    const product = req.body;
    try {
        const userPassword = await Product.update(product, { where: { id: idUser } });
        res.send({ userPassword, message: 'Modified product' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchProduct };