require('dotenv').config();
const { User } = require("../../db/db");
const crypto = require('crypto');
const { newUser } = require('../../config/nodemailer');
const { compareUser } = require("../../handle/compareUser");
const { PORT } = process.env;

function encryptPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
    return hash;
}

// Genera un salt aleatorio (debe almacenarse junto con la contraseña en la base de datos)
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

const createUser = async (req, res) => {
    //{ "username": "Martin", "email": "martin@gimal.com", "password": "Martin5%", "user_image": "", "contact": "" }
    const user = req.body
    try {
        if (!user.username || !user.email) return res.send({ message: 'Name or email is requiere' });
        const compare = await compareUser(user.username, user.email);
        console.log(compare, 'COMPARE');
        if (compare) {
            const salt = generateSalt();
            const hashedPassword = encryptPassword(user.password, PORT);
            const userNew = await User.create({ ...user, password: hashedPassword });
            await newUser(user.email);
            return res.send(userNew);
        }
        res.send({ message: 'User already exists' })
    } catch (error) {
        console.log({ message: error.message });
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createUser };

// {
//     "username": "Martin",
//     "email": "martinnn@gmail.com",
//     "password": "Martin5%",
//     "user_image": "",
//     "contact": ""
//   }