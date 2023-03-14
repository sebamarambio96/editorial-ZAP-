import { Users } from "../models/Users.js"
import jwt from 'jsonwebtoken'
import { Contacts } from "../models/Contact.js"
const secret = 'esteeselsecreto'

//GET all users
export async function getUsers(req, res, next) {
    //Recorre todas las filas y genera un arreglo
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//GET user info
export async function getUserInfo(req, res) {
    try {
        const token = req.headers['x-access-token']
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'No estás autorizado'
            })
        }
        const decoded = jwt.verify(token, secret)
        console.log(decoded)
        const { id } = decoded
        const user = await Users.findOne({
            where: {
                id
            }
        })
        if (!user) return res.status(404).json({ auth: false, message: 'Usuario no existe' })

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ auth: false, message: error.message })
    }
}

//ADD new user
export async function addUser(req, res) {
    try {
        const { name, rut, email, password } = req.body
        //Validate email
        const user = await Users.findOne({
            where: {
                email
            }
        })
        if (user) return res.status(404).json({
            auth: false,
            message: 'Correo ya se encuentra registrado'
        })
        //Convert pass
        const encryptPass = await Users.encryptPass(password)
        const newUser = await Users.create({
            name,
            rut,
            email,
            password: encryptPass
        })
        const { id } = newUser

        //Create token
        const token = jwt.sign({ id }, secret, {
            expiresIn: 60 * 60 * 24
        })

        res.status(201).json({ auth: true, token: token })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Login
export async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await Users.findOne({
            where: {
                email
            }
        })
        if (!user) return res.status(404).json({
            auth: false,
            message: 'Correo no existe'
        })
        const passValid = await Users.validatePass(password, user.password)
        if (!passValid) {
            return res.status(401).json({
                auth: false,
                message: 'Contraseña incorrecta'
            })
        }
        //Create token
        const token = jwt.sign({ id: user.id }, secret, {
            expiresIn: 60 * 60 * 24
        })
        res.status(201).json({ auth: true, token: token })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Contact message
export async function contact(req, res) {
    const { name, email, message } = req.body
    try {
        Contacts.create({
            name, 
            email, 
            message
        })
        res.status(200).json({ auth: true })
    } catch (error) {
        return res.status(500).json({ auth: false, message: error.message })
    }
}