import app from "./app.js";
import { sequelize } from "./src/database/database.js";
import './src/models/Categories.js'
import './src/models/Clients.js'
import './src/models/InvoicesDetail.js'
import './src/models/Invoices.js'
import './src/models/Products.js'
import fs from 'fs';
import https from 'https'

//Pagina que inicia el servidor

async function main() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
        //if no exist CREATE tables
        await sequelize.sync({ force: false });
        await https.createServer({
            key: fs.readFileSync('cerezasverdes.pem')
        }, app).listen(8080)
        /* app.listen(8080) */
        console.log('Servidor en el puerto 8080')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()
