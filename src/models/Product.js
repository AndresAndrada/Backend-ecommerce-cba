const { DataTypes } = require("sequelize")

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
            type: DataTypes.TEXT,
        },
        // type: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        // },
        image: {
            type: DataTypes.STRING,
        },
        pirce: {
            type: DataTypes.INTEGER
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