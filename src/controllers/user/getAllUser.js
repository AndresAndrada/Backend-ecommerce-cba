const { User } = require("../../db/db");

const getAllUser = async (req, res) => {
    try {
        const userFind = await User.findAll();
        res.send(userFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getAllUser };