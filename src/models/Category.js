const { DataTypes } = require("sequelize")

const Category = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name_category: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false
        }
    )
};

module.exports = { Category }