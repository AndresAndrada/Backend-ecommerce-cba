const { User } = require("../db/db")

const compareUser = async (username, email) => {
    try {
        const userfind = await User.findOne({ where: { username } });
        const res = !userfind?.dataValues ? true : false;
        return res;
    } catch (error) {
        console.error({ error: 'Error' });
    }
};

module.exports = { compareUser };