import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getBlogByAuthor, getOneBlog, searchBlog, updateBlog, uploadBlogImage, uploadMiddleWare } from "../controllers/blogsController.js"
export const router = express.Router()

router.get("/", getAllBlogs)
router.post("/", addBlog)
router.get("/blogs/:id", getOneBlog)
router.get("/blogs/author/:author", getBlogByAuthor)
router.put("/blogs/update/:id", updateBlog)
router.delete("/blogs/delete/:id", deleteBlog)
router.get("/blogs/search/blog/", searchBlog)

// uplading image
router.post("/blogs/image-upload", uploadMiddleWare.single("image"), uploadBlogImage)
export default router