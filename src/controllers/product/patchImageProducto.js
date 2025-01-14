const { Product } = require("../../db/db");
const { cloudinaryPost } = require("../../utils/cloudinary");

const patchImageProduct = async (req, res) => {
    const { idProduct } = req.params;
    try {
        const productFind = await Product.findByPk(idProduct);
        // const productFind = await Product.findOne({ where: { id: idProduct } });
        console.log(idProduct, 'ID FIND');
        console.log(productFind, 'PRODUCT FIND');
        var userImage;
        if (productFind?.dataValues && req.files?.image) {
            const image = await cloudinaryPost(req.files?.image.tempFilePath);
            console.log(image, typeof image, 'IMG CLOUDYNARI');
            !image
                ? res.send({ message: 'Image not exist' })
                : userImage = await Product.update({ image }, { where: { id: idProduct } });
            const product = await Product.findByPk(idProduct);
            console.log(product, 'IMAGEEE');

            res.send({ message: 'Product modified' });
        } else res.send({ message: 'Something went wrong' });
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { patchImageProduct };