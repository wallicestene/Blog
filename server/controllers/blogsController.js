import mongoose from "mongoose";
import Blogs from "../models/blogsModel.js";

// get all blog posts
const getAllBlogs = (req, res) => {
  Blogs.find()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
const getOneBlog = (req, res) => {
  const id = req.params.id;
};
// export those functions
export { getAllBlogs, getOneBlog };
