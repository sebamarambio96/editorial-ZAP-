import express from "express";
import htmlRoutes from "./src/routes/html.routes.js";
import productsRoutes from "./src/routes/products.routes.js";
import backupRoutes from "./src/routes/backup.routes.js";
import cors from 'cors';
import favicon from 'serve-favicon'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

//middlewares
app.use(favicon(path.join(__dirname, 'public', '/img/favicon.ico')))
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(htmlRoutes)
app.use(productsRoutes)
app.use(backupRoutes)




export default app
