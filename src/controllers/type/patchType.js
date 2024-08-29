const { Type } = require("../../db/db");
const { encryptPassword } = require("../../middleware/encryptPassword");
const { SALT } = process.env;

const patchType = async (req, res) => {
    const { idType } = req.params;
    const type = req.body;
    try {
        const typeFind = await Type.findOne({ where: { name_type: type.name_type } });
        if (typeFind.dataValues) {
            const userPassword = await Type.update(type, { where: { id: idType } });
            res.send({ userPassword, message: 'Modified already exists' });
        } else res.status(309).send({ message: 'Type all exist' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchType };