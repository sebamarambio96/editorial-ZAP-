import { Sequelize } from "sequelize";
import dotenv from "dotenv"; //traemos las variables de entorno
dotenv.config({path: '.env'})

export const sequelize = new Sequelize('postgres://jcaqjmdz:Y26G0_-qYoJZ4_QSBgykYuGK-oVO_LDU@babar.db.elephantsql.com/jcaqjmdz')