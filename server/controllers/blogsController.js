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

// adding a blog
const addBlog = (req, res) => {
  const { title, author, body } = req.body;
  if (!title || !author || !body) {
    throw new Error("Cannot add a blog without a title or author or content");
  }
  Blogs.create({ title, author, body })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error adding the blog. ${error}` });
    });
};

// get one blog by id
const getOneBlog = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid id" });
  }
  Blogs.findById(id)
    .then((blog) => {
      if (!blog) {
        res.status(404).json({ error: "No blog found with that id" });
      }
      res.status(200).json(blog);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error finding the blog. ${error}` });
    });
};

// update blog
const updateBlog = (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid id" });
  }
  Blogs.findByIdAndUpdate(id, { title, body })
    .then((updatedBlog) => {
      return !updatedBlog
        ? res.status(404).json({ error: "No blog found with that id" })
        : res.status(200).json(updatedBlog);
    })
    .catch((error) => {
      res.status(500).json({ error: ` Error updating the blog. ${error}` });
    });
};

// delete a blog
const deleteBlog = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid id" });
  }
  Blogs.findByIdAndDelete(id)
    .then((result) => {
      return !result
        ? res.status(400).json({ error: "No blog found with that id" })
        : res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error deleting the blog. ${error}` });
    });
};
// export those functions
export { getAllBlogs, getOneBlog, addBlog, updateBlog, deleteBlog };
