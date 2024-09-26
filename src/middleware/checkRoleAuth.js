const { User } = require("../db/db");
const { verifyToken } = require("./verifyToken");

const checkRoleAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split(' ').pop() : undefined;
        const tokenData = token ? await verifyToken(token) : undefined;
        const userData = await User.findByPk(tokenData._id);
        userData.admin ? next() : res.status(409).send({ message: "You don't have authorization" })
    } catch (error) {
        res.send({ message: error.message });
    }
}

module.exports = { checkRoleAuth }