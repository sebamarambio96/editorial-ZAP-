import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Carts } from "./Carts.js";
import { InvoicesDetail } from "./InvoicesDetail.js";

export const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0 }
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
}
)

Products.hasMany(InvoicesDetail, {
    foreignKey: 'id_product',
    sourceKey: 'id',
})

InvoicesDetail.belongsTo(Products, {
    foreignKey: 'id_product',
    targetId: 'id'
})

Products.hasMany(Carts, {
    foreignKey: 'id_product',
    sourceKey: 'id',
})

Carts.belongsTo(Products, {
    foreignKey: 'id_product',
    targetId: 'id'
})