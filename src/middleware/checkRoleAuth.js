const { User } = require("../db/db");
const { verifyToken } = require("./verifyToken");

const chackRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split().pop() : undefined;
        const tokenData = await verifyToken(token)
        const userData = await User.findByPk(tokenData._id);
        console.log(tokenData, 'TOKEN DATA');
        userData.admin ? next() : res.status(409).send({ message: 'Token is not define' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    }
}

module.exports = { chackRoleAuth }