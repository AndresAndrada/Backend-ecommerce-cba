const jwt = require('jsonwebtoken');

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.error({ error: error.message });
    }
}

module.exports = { verifyToken };