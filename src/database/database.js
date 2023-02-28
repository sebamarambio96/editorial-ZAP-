import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('portafolio 4 sequelize', 'postgres', 'cerezasazules98', {
    host: 'localhost',
    dialect: 'postgres'
})