const { User } = require("../../db/db");

const getUserById = async (req, res, next) => {
    const { idUser } = req.params;
    try {
        const findUser = await User.findByPk(idUser, {
            attributes: { exclude: ['password'] },
        });
        console.log(findUser, 'FIND PRODUCT');
        findUser.id ? res.send(findUser) : res.status(404).send({ message: 'Product not found' })
    } catch (error) {
        next(error);
    };
}

module.exports = { getUserById };