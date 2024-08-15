const { Type } = require("../../db/db");

const getAllType = async (req, res) => {
    try {
        const typeFind = await Type.findAll();
        res.send(typeFind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getAllType };