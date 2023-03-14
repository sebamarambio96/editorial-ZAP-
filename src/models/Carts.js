import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Carts = sequelize.define('carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0 }
    }
}, {
    timestamps: true
}
)

