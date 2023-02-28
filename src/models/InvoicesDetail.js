import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const InvoicesDetail =  sequelize.define('invoices_detail',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_invoice:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_product:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false
}
)