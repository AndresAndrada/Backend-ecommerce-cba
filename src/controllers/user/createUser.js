require('dotenv').config();
const { User } = require("../../db/db");
const { newUser } = require('../../config/nodemailer');
const { compareUser } = require("../../middleware/compareUser");
const { encryptPassword, generateSalt } = require('../../middleware/encryptPassword');
const { SALT } = process.env;

const createUser = async (req, res) => {
    //{ "username": "Martin", "email": "martin@gimal.com", "password": "Martin5%", "user_image": "", "contact": "" }
    const user = req.body
    try {
        if (!user.username || !user.email) return res.send({ message: 'Name or email is requiere' });
        const compare = await compareUser(user.username, user.email);
        if (compare) {
            const hashedPassword = encryptPassword(user.password, SALT);
            let userNew;
            if (user.email === "andresandrada1994@gmail.com" || user.email === "andresandrada@gmail.com") {
                userNew = await User.create({ ...user, password: hashedPassword, admin: true });
            } else {
                userNew = await User.create({ ...user, password: hashedPassword });
            }
            await newUser(user.email);
            return res.send({ id: userNew.id, username: userNew.username, email: userNew.email });
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