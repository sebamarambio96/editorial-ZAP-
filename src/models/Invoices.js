import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { InvoicesDetail } from "./InvoicesDetail.js";

export const Invoices =  sequelize.define('invoices',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_client:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: true
}
)


Invoices.hasMany(InvoicesDetail, {
    foreignKey: 'id_invoice',
    sourceKey: 'id',
})

InvoicesDetail.belongsTo(Invoices, {
    foreignKey: 'id_invoice',
    targetId: 'id'
})