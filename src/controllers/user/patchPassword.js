const { User } = require("../../db/db");
const { encryptPassword } = require("../../middleware/encryptPassword");
const { SALT } = process.env;

const patchPassword = async (req, res) => {
    const { idUser } = req.params;
    const dataUser = req.body;
    try {
        const password = encryptPassword(dataUser.password, SALT);
        const userPassword = await User.update({ password: password }, { where: { id: idUser } });
        res.send(userPassword);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchPassword };