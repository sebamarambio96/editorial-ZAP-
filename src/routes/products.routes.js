import { Router } from "express";
import { getCart, updateCart } from "../controllers/cart.controllers.js";
import { addOrder, addProduct, deleteProduct, getProduct, getProducts, getSales, updateProduct } from "../controllers/products.controllers.js";

const router = Router()


//GET all products
router.get('/products', getProducts)

//GET all sales
router.get('/sales', getSales)

//GET one product
router.get('/products/:id', getProduct)

//ADD new product
router.post('/products',addProduct)

//MODIFY a product
router.put('/products/:id', updateProduct)


//DELETE a product
router.delete('/products/:id', deleteProduct)

//ADD order
router.post('/addOrder', addOrder)

//UPDATE cart
router.post('/cart', updateCart)

//GET cart
router.get('/cart', getCart)

export default router