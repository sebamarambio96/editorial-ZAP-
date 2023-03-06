import * as fs from 'fs';
import { Categories } from '../models/Categories.js';
import { Products } from '../models/Products.js';


//ADD all products
export async function backup(req, res) {
    try {
        //categories BACKUP
    let categories = ["Horror cósmico", "Fantasía", "Mangas"]
    categories.map(async category => {
        await Categories.create({
            category
        })
    })
    //products BACKUP
    let dataProducts = fs.readFileSync('./public/data/products.json')
    let products = JSON.parse(dataProducts)
    await Products.bulkCreate(products)
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
