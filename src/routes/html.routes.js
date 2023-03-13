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

router.get('/', async (req, res) => {
    res.sendFile("/pages/aboutUs.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/contact.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/cart.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/login.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/products.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/singUp.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/signUp.html")
})

router.get('/', async (req, res) => {
    res.sendFile("/pages/myAccount.html")
})


//EXPORT
export default router