import express from "express";
import { getUser, userLogin, userSignUp } from "../controllers/usersController.js";
const router = express.Router()

router.post("/logIn", userLogin)
router.post("/signUp", userSignUp)
router.get("/get-user/:id", getUser)

export default router