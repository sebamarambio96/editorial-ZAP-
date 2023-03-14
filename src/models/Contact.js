import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Contacts =  sequelize.define('contacts',{
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