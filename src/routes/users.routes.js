import { Router } from "express";
import { getUsers, getUserInfo, addUser, login, contact} from "../controllers/users.controllers.js";

const router = Router()


//GET all users
router.get('/users', getUsers)

//GET profile
router.get('/profile/', getUserInfo)

//Login
router.post('/login', login)

//ADD new user
router.post('/register',addUser)

/* //MODIFY a user
router.put('/users/:id', updateUser) */

//Contact message
router.post('/contact', contact)

export default router