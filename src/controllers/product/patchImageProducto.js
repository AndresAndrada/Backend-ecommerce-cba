const { Product } = require("../../db/db");
const { cloudinaryPost } = require("../../utils/cloudinary");

const patchImageProduct = async (req, res) => {
    const { idProduct } = req.params;
    const { image } = req.files;
    try {
        const productFind = await Product.findByPk(idProduct);
        if (productFind.dataValues) {
            const img = await cloudinaryPost(image.tempFilePath);
            const userImage = await Product.update({ image: img }, { where: { id: idProduct } });
            res.send({ userImage, message: 'Modified already exists' });
        } else res.status(309).send({ message: 'Product all exist' })
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { patchImageProduct };