import { Router } from "express";
import { login, logout, profile, registerUser } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/register',registerUser)
router.post('/login',login)
router.post('/logout', logout)

router.get('/profile',authRequired, profile)

export default router