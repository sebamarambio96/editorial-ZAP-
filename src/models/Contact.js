import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    message:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: true
}
)