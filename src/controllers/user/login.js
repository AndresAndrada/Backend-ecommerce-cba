const { User } = require("../../db/db");
const crypto = require('crypto');
const { comparePassword } = require("../../handle/comparePassword");
const { tokenSign } = require("../../handle/generateToken");

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

function encryptPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
    return hash;
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const salt = generateSalt();
        const hashedPassword = encryptPassword(password, salt);
        console.log(hashedPassword, 'hashedPassword');
        const user = await User.findOne({ where: { password: hashedPassword } });
        console.log(user, 'DATAVALUES');
        if (!user?.dataValues) return res.status(404).send({ error: 'User not found' })
        const checkPassword = await comparePassword(password);
        const tokenSession = await tokenSign(user);
        checkPassword ? res.send({ user, tokenSession }) : res.status(409).send({ error: 'Username or password is invalidate' });
    } catch (error) {
        console.log({ message: error.message });
        res.status(304).send({ message: error.message });
    }
}

module.exports = { login }