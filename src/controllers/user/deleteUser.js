const { User } = require("../../db/db");

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    const { logicalDelete } = req.body;
    try {
        try {
            const deleteUser = !logicalDelete
                ? await User.destroy({ where: { id: idUser } })
                : await User.update({ status: false }, { where: { id: idUser } });
            if (!deleteUser) throw new Error("Resquest failed.");
            res.send({ message: 'Ususario eliminado' });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { deleteUser };