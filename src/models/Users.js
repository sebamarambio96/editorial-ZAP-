import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import bcrypt from "bcryptjs";
import { Carts } from "./Carts.js";


export const Users = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
}
)

// Class Method
Users.encryptPass = async function (password) {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
};

Users.validatePass = async function ( pass,passDB) {
    return bcrypt.compare(pass, passDB)
};

//Relations
Users.hasMany(Carts, {
    foreignKey: 'id_user',
    sourceKey: 'id',
})

Carts.belongsTo(Users, {
    foreignKey: 'id_user',
    targetId: 'id'
})
