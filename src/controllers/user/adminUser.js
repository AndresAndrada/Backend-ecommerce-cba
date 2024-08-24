const { User } = require("../../db/db");

const adminUser = async (req, res) => {
    const { id } = req.params;
    const admin = req.body;
    try {
        const userFind = await User.update(admin, { where: { id } });
        res.send(userFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { adminUser };