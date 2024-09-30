const { DataTypes } = require("sequelize");
const { attibutesCategory } = require("../attributes/desciptionCategory");
const { priceProduct } = require("../attributes/priceProduct");

const Product = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name_product: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desciption: {
            type: DataTypes.JSON,
            defaultValue: attibutesCategory()
        },
        image: {
            type: DataTypes.STRING,
        },
        pirce: {
            type: DataTypes.JSON,
            defaultValue: priceProduct(),
        },
        rating: {
            type: DataTypes.DECIMAL(3, 2),
            defaultValue: 5.0,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
        {
            timestamps: false
        }
    )
};

module.exports = { Product };