require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

const cloudinaryPost = async (image) => {
    try {
        const img = await cloudinary.uploader.upload(image, {
            folder: 'ecommerce-cba'
        });
        return img.secure_url;
    } catch (error) {
        return { message: error };
    };
};

module.exports = { cloudinaryPost };