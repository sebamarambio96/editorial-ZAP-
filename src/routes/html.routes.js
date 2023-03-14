import { Router } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router()

//ROUTES

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/index.html"))
})

router.get('/index', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/index.html"))
})

router.get('/aboutUs.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/aboutUs.html"))
})

router.get('/contact.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/contact.html"))
})

router.get('/cart.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/cart.html"))
})

router.get('/login.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/login.html"))
})

router.get('/products.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/products.html"))
})

router.get('/signUp.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/signUp.html"))
})

router.get('/myAccount.html', async (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/pages/myAccount.html"))
})


//EXPORT
export default router