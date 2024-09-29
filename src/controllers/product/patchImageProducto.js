const { Product } = require("../../db/db");
const { cloudinaryPost } = require("../../utils/cloudinary");

const patchImageProduct = async (req, res) => {
    const { idProduct } = req.params;
    try {
        const productFind = await Product.findByPk(idProduct);
        if (productFind.dataValues && req.files?.image) {
            const img = await cloudinaryPost(req.files?.image.tempFilePath);
            const userImage = await Product.update({ image: img }, { where: { id: idProduct } });
            res.send({ userImage, message: 'Product modified' });
        } else res.send({ message: 'Something went wrong' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchImageProduct };