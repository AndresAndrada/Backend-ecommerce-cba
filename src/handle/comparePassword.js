const { User } = require("../db/db")

const comparePassword = async (password) => {
    try {
        console.log(password, 'PASSWORD');
        const userfind = await User.findOne({ where: { password } });
        if (userfind?.dataValues) {
            return true;
        };
        return false;
    } catch (error) {
        console.error({ error: 'Error' });
    }
};

module.exports = { comparePassword };