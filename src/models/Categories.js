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


Categories.hasMany(Products, {
    foreignKey: 'id_category',
    sourceKey: 'id',
})

Products.belongsTo(Categories, {
    foreignKey: 'id_category',
    targetId: 'id'
})
