import { CloudUploadOutlined } from "@mui/icons-material";
// import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddBlogPage = () => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const inputHeader = (header) => {
    return <h1 className=" text-lg font-bold">{header}</h1>;
  };
  const inputDescription = (description) => {
    return <p className=" text-sm text-gray-500 mb-2">{description}</p>;
  };
  const inputTitle = (header, description) => {
    return (
      <div>
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-center font-Open-Sans text-lg">
        Create a new Blog Post
      </h1>
      <div>
        <form>
          <div>
            {inputTitle("Title", "Enter title for your blog post")}
            <input
              type="text"
              placeholder="Title"
              className=" h-14 border border-gray-300 outline-none rounded px-2 w-full text-lg "
            />
          </div>
          <div>
            {inputTitle("Blog image", "Upload image for your blog post")}
            <label
              htmlFor="image"
              className=" flex items-center space-x-2 border w-fit p-6 bg-Secondary-800 rounded-md text-white text-sm hover:cursor-pointer "
            >
              <span>Upload</span>
              <CloudUploadOutlined />
              <input
                type="file"
                name="image"
                id="image"
                accept=".png,.jpg,.jpeg"
                className=" hidden"
              />
            </label>
          </div>
          <div>
            {inputTitle("Content", "Provide your content here...")}
            <ReactQuill
              theme="snow"
              placeholder="Start typing here..."
              modules={modules}
            //   formats={formats}
            //   value={content}
            />
          </div>
          <div>
            {inputTitle("Category", "Enter category for your blog post")}
            <input
              type="text"
              placeholder="Category"
              className=" h-14 border border-gray-300 outline-none rounded px-2 w-full text-lg "
            />
          </div>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
