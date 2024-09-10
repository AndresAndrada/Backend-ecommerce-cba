const { Product } = require("../../db/db");

const deleteProduct = async (req, res) => {
    const { idProduct } = req.params;
    console.log(req.params, 'PRODUCT');

    try {
        try {
            const deleteProduct = await Product.destroy({ where: { id: idProduct } });
            if (!deleteProduct) {
                throw new Error("Resquest failed.");
            }
            res.send({ message: 'Producto eliminado', deleteProduct });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { deleteProduct };