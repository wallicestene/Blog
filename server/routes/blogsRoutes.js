import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getOneBlog, updateBlog } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)
router.post("/", addBlog)
router.get("/blogs/:id", getOneBlog)
router.put("/blogs/update/:id", updateBlog)
router.delete("/blogs/delete/:id", deleteBlog)

export default router