import express from "express"
import { addBlog, getAllBlogs, getOneBlog } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)
router.post("/", addBlog)
router.get("/blogs/:id", getOneBlog)
router.put("/blogs/:id", getOneBlog)

export default router