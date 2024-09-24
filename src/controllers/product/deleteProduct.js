const { Product } = require("../../db/db");

const deleteProduct = async (req, res) => {
    const { idProduct } = req.params;
    const { logicalDelete } = req.body;
    try {
        try {
            const deleteProduct = !logicalDelete
                ? await Product.destroy({ where: { id: idProduct } })
                : await Product.update({ status: false }, { where: { id: idProduct } });
            if (!deleteProduct) throw new Error("Resquest failed.");
            res.send({ message: 'Producto eliminado' });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { deleteProduct };