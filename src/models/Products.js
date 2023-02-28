import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { InvoicesDetail } from "./InvoicesDetail.js";

export const Products =  sequelize.define('products',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_category:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: true
}
)

//Relacionar
Products.hasMany(InvoicesDetail, {
    //columan de task que queremos relacionar
    foreignKey: 'id_product',
    //relacion de la tabla actual
    sourceKey: 'id',
})
//tareas pertenece a un solo proyecto
InvoicesDetail.belongsTo(Products, {
    foreignKey: 'id_product',
    targetId: 'id'
})