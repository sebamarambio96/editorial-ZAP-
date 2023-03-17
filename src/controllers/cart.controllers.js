
import jwt from 'jsonwebtoken'
import { Carts } from '../models/Carts.js';
export const secret = 'esteeselsecreto'

//Update cart
export async function updateCart(req, res) {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'Debes iniciar sesión para realizar una compra'
            });
        }
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        const { id } = decoded;
        const cartNewData = [...req.body]
        cartNewData.map(async x => {
            const productCart = await Carts.findOne({ where: { id_product: x.id_product, id_user: id } });
            if (productCart) {
                await productCart.update({
                    id_user: id,
                    id_product: x.id_product,
                    quantity: x.quantity
                });
                await productCart.save();
            } else {
                const newCart = await Carts.create({
                    id_user:id,
                    id_product: x.id_product,
                    quantity: x.quantity
                });
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//GET cart
export async function getCart(req, res) {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'Debes iniciar sesión para realizar una compra'
            });
        }
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        const { id } = decoded;

        const cart = await Carts.findAll({ where: { id_user: id } });
        res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
