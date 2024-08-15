const { DataTypes } = require("sequelize")

const Type = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
            default: false
        },
    },
        {
            timestamps: false
        }
    )
};

module.exports = { Type };