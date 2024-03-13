import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getOneBlog } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)
router.post("/", addBlog)
router.get("/blogs/:id", getOneBlog)
router.put("/blogs/:id", getOneBlog)
router.delete("/blogs/:id", deleteBlog)

export default router