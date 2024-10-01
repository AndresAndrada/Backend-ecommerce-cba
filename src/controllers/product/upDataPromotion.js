const { Product } = require("../../db/db");

const upDataPromotion = async (req, res) => {
    const { idProduct } = req.params;
    const { desciption, promotion } = req.body;
    console.log('ENTREEE');
    try {
        const productFind = await Product.findByPk(idProduct);
        if (productFind?.dataValues) {
            let productPromotion;
            promotion
                ? productPromotion = await Product.update({ desciption, promotion: true }, { where: { id: idProduct } })
                : productPromotion = await Product.update({ desciption, promotion: false }, { where: { id: idProduct } })
            res.send({ productPromotion, message: 'Product modified' });
        } else res.send({ message: 'Something went wrong' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { upDataPromotion };