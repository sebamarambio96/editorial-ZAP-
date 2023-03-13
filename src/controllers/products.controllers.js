import { Products } from "../models/Products.js"
import { Clients } from "../models/Clients.js"
import { Invoices } from "../models/Invoices.js"
import { InvoicesDetail } from "../models/InvoicesDetail.js"
import { sequelize } from "../database/database.js"
import jwt from 'jsonwebtoken'
import { Users } from "../models/Users.js"
const secret = 'esteeselsecreto'

//GET all products
export async function getProducts(req, res) {
    //Recorre todas las filas y genera un arreglo
    try {
        const products = await Products.findAll()
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//GET all sales
export async function getSales(req, res) {
    //Recorre todas las filas y genera un arreglo
    try {
        const invoices = await Invoices.findAll()
        res.status(200).json(invoices)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//GET one product
export async function getProduct(req, res) {
    const { id } = req.params
    try {
        const product = await Products.findOne({
            where: {
                id
            }
        })
        if (!product) return res.status(404).json({ message: 'Producto no existe' })

        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//ADD new product
export async function addProduct(req, res) {
    const { name, id_category, price, stock, img } = req.body
    try {
        const newProject = await Products.create({
            name,
            id_category,
            price,
            stock,
            img
        })
        res.status(201).json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//MODIFY a product
export async function updateProduct(req, res) {
    try {
        const { id } = req.params
        const { name, id_category, price, stock } = req.body
        console.log(req.body)
        //buscamos el objeto que necesitamos
        const product = await Products.findByPk(id)
        product.name = name
        product.id_category = id_category
        product.price = price
        product.stock = stock
        //guardamos el objeto modificado
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


//DELETE a product
export async function deleteProduct(req, res) {
    try {
        const { id } = req.params
        //busca y elimina el dato deseado
        const deleteProduct = await Products.destroy({
            where: {
                id
            }
        })
        //204 no develve nada pero todo fue bien
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//ADD invoice, invoice detal, client and UPDATE stock of each product
export async function addOrder(req, res) {
    const transaction = await sequelize.transaction();
    try {
        const token = req.headers['x-access-token']
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'Debes iniciar sesión para realizar una compra'
            })
        }
        const decoded = jwt.verify(token, secret)
        console.log(decoded)
        const { id } = decoded

        //USER info
        const user = await Users.findOne({ where: { id } })
        if (!user) return res.status(404).json({ message: 'Usuario no existe' })

        const { address, items, totalPrice } = req.body;
        const { name, rut, email } = user;

        //Add client
        const newClient = await Clients.create(
            {
                name,
                rut,
                email,
                address,
            },
            { transaction: transaction }
        );
        const {id:id_client}=newClient
        //Add Invoice
        const newInvoice = await Invoices.create(
            {
                id_client,
                totalPrice
            },
            { transaction: transaction }
        );
        const { id: id_invoice } = newInvoice;
        //ADD product AND UPDATE stock
        //ARRAY id items
        const idItems = items.map((item) => item.idProduct);
        //ARRAY with products data
        const productsData = await Products.findAll(
            {
                where: {
                    id: idItems,
                },
            },
            { transaction: transaction }
        );
        //VALIDATE stock
        let x = 0;
        productsData.map((product) => {
            if (product.stock < items[x].amount) {
                throw new Error(`No hay stock del libro: ${product.name}`);
            }
            x++;
        });
        //CREATE invoice detail and UPDATE stock

        const finalArray = items.map((item) => {
            return { id_invoice, id_product: item.idProduct, amount: item.amount };
        });

        await InvoicesDetail.bulkCreate(finalArray, { transaction: transaction });

        await items.map(async (item) => {
            const product = await Products.findByPk(item.idProduct);
            product.stock = product.stock - item.amount;
            await product.save();
        });

        await transaction.commit();
        const detailOrder = {
            newInvoice,
            newClient,
        }
        /* res.send(detailOrder) */
        res.status(201).json(detailOrder)
    } catch (error) {
        await transaction.rollback();
        return res.status(500).json({auth: false, message: error.message });
    }
}











