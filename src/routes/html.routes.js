import { Router } from "express";

const router = Router()

//ROUTES

router.get('/', async (req, res) => {
    res.sendFile("index.html")
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