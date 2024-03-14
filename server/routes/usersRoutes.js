import express from "express";
import { userLogin, userSignUp } from "../controllers/usersController.js";
const router = express.Router()

router.post("/logIn", userLogin)
router.post("/signUp", userSignUp)

export default router