import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Products } from "./Products.js";

export const Categories =  sequelize.define('categories',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
}
)

//Relacionar
Categories.hasMany(Products, {
    //columan de task que queremos relacionar
    foreignKey: 'id_category',
    //relacion de la tabla actual
    sourceKey: 'id',
})
//tareas pertenece a un solo proyecto
Products.belongsTo(Categories, {
    foreignKey: 'id_category',
    targetId: 'id'
})
