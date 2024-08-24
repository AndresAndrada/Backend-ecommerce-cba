const jwt = require('jsonwebtoken');

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.error({ message: error.message });
    }
}

module.exports = { verifyToken };