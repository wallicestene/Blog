import { CloudUploadOutlined } from "@mui/icons-material";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import axios from "axios";

const AddBlogPage = () => {
  const [blogDetails, setBlogDetails] = useState({
    author: "65f20eacad0a8597c5ad3364",
    title: "",
    image: "",
    body: "",
    category: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setBlogDetails((prevDetails) => {
      return { ...prevDetails, category: options[index] };
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBodyChange = (body) => {
    setBlogDetails((prevDetails) => {
      return { ...prevDetails, body };
    });
  };

  const options = [
    "Technology",
    "Science",
    "Health & Wellness",
    "Travel",
    "Food & Cooking",
    "Lifestyle",
    "Fashion & Beauty",
    "Personal Finance",
    "Education",
    "Parenting",
    "Sports & Fitness",
    "Entertainment",
    "Arts & Culture",
    "Business & Entrepreneurship",
    "Environment & Sustainability",
    "History",
    "Self-Improvement",
    "Relationships & Dating",
    "Mental Health",
    "Politics & Current Affairs",
  ];
  const modules = {
    toolbar: 
    //  [
    //     { header: "1" },
    //     { header: "2" },
    //     {
    //       font: [
    //         { value: "serif", label: "Serif" },
    //         { value: "sans-serif", label: "Sans Serif" },
    //         { value: "monospace", label: "Monospace" },
    //       ],
    //     },
    //   ],
    //   [{ size: [] }],
    //   ["bold", "italic", "underline", "strike", "blockquote"],
    //   [{ list: "ordered" }, { list: "bullet" }],
    //   ["link", "image"],
    [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    let formData = new FormData();
    formData.append("image", files[0]);
    axios
      .post("http://localhost:3000/blogs/image-upload", formData)
      .then((response) => response.data)
      .then((image) =>
        setBlogDetails((prevDetails) => {
          return { ...prevDetails, image: image };
        })
      )
      .catch((err) => console.log(err));
  };

  const inputHeader = (header) => {
    return <h1 className=" text-2xl font-bold">{header}</h1>;
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
  console.log(blogDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/", blogDetails)
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-center font-Open-Sans text-lg">
        Create a new Blog Post
      </h1>
      <div>
        <form className=" space-y-5" onSubmit={handleSubmit}>
          <div>
            {inputTitle("Title", "Enter title for your blog post")}
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) =>
                setBlogDetails((prevDetails) => {
                  return { ...prevDetails, title: e.target.value };
                })
              }
              value={blogDetails.title}
              className=" h-14 border border-gray-300 outline-none rounded px-2 w-full text-lg "
            />
          </div>
          <div>
            {inputTitle("Blog image", "Upload image for your blog post")}
            <label
              htmlFor="image"
              className=" flex items-center space-x-2 border w-fit p-8 bg-Secondary-800 rounded-md text-white text-sm hover:cursor-pointer "
              onChange={uploadImage}
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
              value={blogDetails.body}
              onChange={handleBodyChange}
            />
          </div>
          <div>
            {inputTitle("Category", "Enter category for your blog post")}
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: "background.paper" }}
              className=" w-1/2"
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="Select category"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  primary="Select category"
                  secondary={options[selectedIndex]}
                />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
