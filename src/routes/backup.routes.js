import { Router } from "express";
import { backup } from "../controllers/backup.controllers.js";

const router = Router()

//POST backup
router.post('/backup', backup)

export default router