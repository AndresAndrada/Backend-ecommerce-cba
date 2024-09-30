const { Product, Type } = require("../../db/db");

const createProduct = async (req, res) => {
  // const { name_product } = req.query;
  const { product, idType } = req.body;
  try {
    const productFind = await Product.findOne({
      where: { name_product: product.name_product }
    });

    const typefind = await Type.findByPk(idType);
    if (productFind?.id) return res.send({ message: 'Product all exists' });
    if (!typefind?.id) return res.send({ message: 'Type not exist' })
    const newProducto = await Product.create(product);
    await newProducto.setType(idType);
    res.send({ newProducto, message: 'Create product succesfull' });
  } catch (error) {
    res.send({ message: error.message });
  };
};

module.exports = { createProduct };