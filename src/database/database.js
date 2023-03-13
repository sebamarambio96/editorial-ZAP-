import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: '.env'})

export const sequelize = new Sequelize(process.env.SECRET_KEY)