const { verifyToken } = require('../middleware/verifyToken');

const checkAuth = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization ? req?.headers?.authorization.split(' ').pop() : undefined
        const tokenDAta = token ? await verifyToken(token) : undefined;
        tokenDAta?.iat ? next() : res.status(409).send({ error: "Token is not define" });
    } catch (error) {
        res.status(304).send({ message: error.message });
    }
}

module.exports = { checkAuth };