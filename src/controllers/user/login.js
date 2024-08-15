require('dotenv').config();
const { User } = require("../../db/db");
const crypto = require('crypto');
const { comparePassword } = require("../../handle/comparePassword");
const { tokenSign } = require("../../handle/generateToken");
const { SALT } = process.env;

function encryptPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
    return hash;
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(hashedPassword, 'hashedPassword');
        const user = await User.findOne({ where: { email } });
        if (!user?.dataValues) return res.status(404).send({ error: 'Username or password is invalidate' })
        const hashedPassword = encryptPassword(password, SALT);
        const checkPassword = await comparePassword(hashedPassword);
        const tokenSession = await tokenSign(user);
        checkPassword ? res.send({ idUser: user.id, emailUser: user.email, tokenSession }) : res.status(409).send({ error: 'Username or password is invalidate' });
    } catch (error) {
        console.log({ message: error.message });
        res.status(304).send({ message: error.message });
    }
}

module.exports = { login }