import mongoose from "mongoose";
import Blogs from "../models/blogsModel.js";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import fs from "fs";
dotenv.config();

// s3 bucket details
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;
const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
  region: bucketRegion,
});
// get all blog posts
const getAllBlogs = (req, res) => {
  Blogs.find()
    .populate({
      path: "author",
      select: "username profile",
    })
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// adding a blog
const addBlog = (req, res) => {
  const { title, author, body, image, category } = req.body;
  if (!title || !author || !body || !image || !category) {
    throw new Error(
      "Cannot add a blog without a title or author or content or category or image"
    );
  }
  Blogs.create({ title, author, body, image, category })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error adding the blog. ${error}` });
    });
};

// upload Blog image
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, "photo" + Date.now() + path.extname(file.originalname));
  },
});
const uploadMiddleWare = multer({ storage });
const uploadBlogImage = (req, res) => {
  const { filename, path, mimetype } = req.file;

  const image = fs.readFileSync(path);
  const params = {
    Bucket: bucketName,
    Key: filename,
    Body: image,
    ContentType: mimetype,
  };
  const command = new PutObjectCommand(params);
  s3.send(command, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return;
    }
  });
  res
    .status(200)
    .json(`https://bookify-app-bucket.s3.amazonaws.com/${filename}`);
};
// get one blog by id
const getOneBlog = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid id" });
  }
  Blogs.findById(id)
    .populate({
      path: "author",
      select: "username profile",
    })
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

// get blog by author
const getBlogByAuthor = (req, res) => {
  const { author } = req.params;
  if (!mongoose.Types.ObjectId.isValid(author)) {
    res.status(404).json({ error: "Invalid author" });
  }
  Blogs.find({ author })
    .populate({
      path: "author",
      select: "username profile",
    })
    .then((blogs) => {
      if (!blogs) {
        res.status(404).json({ error: "No blogs for this user were found." });
      }
      res.status(200).json(blogs);
    })
    .catch((err) => {
      res.json({ error: "Error getting blogs from this author." });
    });
};

// update blog
const updateBlog = (req, res) => {
  const { title, body, image, category } = req.body;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid id" });
  }
  Blogs.findByIdAndUpdate(id, { title, body, image, category }, { new: true })
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

// search a blog by name or category
const searchBlog = (req, res) => {
  const { search } = req.query;
  const searchRegex = new RegExp(search, "i");
  Blogs.find({ $or: [{ title: searchRegex }, { category: searchRegex }] })
    .populate({
      path: "author",
      select: "username profile",
    })
    .then((results) => {
      if (!results) {
        res
          .status(404)
          .json({ error: "No blog found with that name or category." });
      }
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error searching the blog.` });
    });
};
// export those functions
export {
  getAllBlogs,
  getOneBlog,
  getBlogByAuthor,
  addBlog,
  updateBlog,
  deleteBlog,
  uploadMiddleWare,
  uploadBlogImage,
  searchBlog,
};
