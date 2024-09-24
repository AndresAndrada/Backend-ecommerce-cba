const { Type } = require("../../db/db");

const deleteType = async (req, res) => {
    const { idType } = req.params;
    const { logicalDelete } = req.body;
    try {
        try {
            const deleteType = !logicalDelete
                ? await Type.destroy({ where: { id: idType } })
                : await Type.update({ status: false }, { where: { id: idType } });
            if (!deleteType) throw new Error("Resquest failed.");
            res.send({ message: 'Tipo eliminado' });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { deleteType };