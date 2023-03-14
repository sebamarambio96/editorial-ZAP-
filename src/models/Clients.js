import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Invoices } from "./Invoices.js";

export const Clients =  sequelize.define('clients',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    rut:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
}
)



Clients.hasMany(Invoices, {
    
    foreignKey: 'id_client',
    //relacion de la tabla actual
    sourceKey: 'id',
})
//tareas pertenece a un solo proyecto
Invoices.belongsTo(Clients, {
    foreignKey: 'id_client',
    targetId: 'id'
})