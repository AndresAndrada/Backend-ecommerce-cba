const { DataTypes } = require("sequelize")

const User = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            // nombre del usuario
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING, //  contacto del usuario
            allowNull: false
        },
        user_image: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            // numero del profesional
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            //borrado logico
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        admin: {
            //Usuario Administrador
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
        {
            timestamps: false
        }
    )
};

module.exports = { User };