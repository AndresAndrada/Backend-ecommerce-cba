const { Type } = require("../../db/db");

const createType = async (req, res) => {
    // const { name_product } = req.query;
    const { name_type } = req.body;
    try {
        const typeFind = await Type.findOne({
            where: { name_type }
        });
        if (typeFind?.id) return res.status(300).send({ message: 'Type all exists' });
        const newType = await Type.create(req.body);
        res.send({ newType, message: 'Create type succesfull' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { createType };