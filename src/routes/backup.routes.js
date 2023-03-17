import { Router } from "express";
import { backupC, backupP } from "../controllers/backup.controllers.js";

const router = Router()

//POST backup
router.post('/backupC', backupC)
router.post('/backupC', backupP)

export default router