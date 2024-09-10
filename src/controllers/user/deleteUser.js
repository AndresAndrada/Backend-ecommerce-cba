const { User } = require("../../db/db");

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    console.log(idUser, 'DELETE USER');

    try {
        try {
            const deleteUser = await User.destroy({ where: { id: idUser } });
            if (!deleteUser) {
                throw new Error("Resquest failed.");
            }
            res.send({ message: 'Usuario eliminado', deleteUser });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { deleteUser };