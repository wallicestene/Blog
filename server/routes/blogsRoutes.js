import express from "express"
import { getAllBlogs } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)

export default router