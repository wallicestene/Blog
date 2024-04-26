import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getBlogByAuthor, getOneBlog, updateBlog, uploadBlogImage, uploadMiddleWare } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)
router.post("/", addBlog)
router.get("/blogs/:id", getOneBlog)
router.get("/blogs/author/:author", getBlogByAuthor)
router.put("/blogs/update/:id", updateBlog)
router.delete("/blogs/delete/:id", deleteBlog)
// uplading image
router.post("/blogs/image-upload", uploadMiddleWare.single("image"), uploadBlogImage)
export default router