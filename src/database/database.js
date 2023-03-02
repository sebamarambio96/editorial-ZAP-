import { Sequelize } from "sequelize";
import dotenv from "dotenv"; //traemos las variables de entorno
dotenv.config({path: '.env'})

export const sequelize = new Sequelize('postgres://izcnysnb:v7yWwN4-m0hNwOwfGx0RFZgJ0xX2r7dj@babar.db.elephantsql.com/izcnysnb')