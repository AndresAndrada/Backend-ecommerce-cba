const { User } = require("../db/db");
const { verifyToken } = require("./verifyToken");

const chackRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split(' ').pop() : undefined;
        const tokenData = token ? await verifyToken(token) : undefined;
        const userData = await User.findByPk(tokenData._id);
        console.log(userData.admin, 'TOEN DATA');
        userData.admin ? next() : res.status(409).send({ message: "You don't have authorization" })
    } catch (error) {
        res.status(304).send({ message: error.message });
    }
}

module.exports = { chackRoleAuth }