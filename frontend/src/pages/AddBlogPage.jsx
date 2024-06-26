/* eslint-disable react/prop-types */
import { Close, CloudUploadOutlined } from "@mui/icons-material";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useUserContext } from "@/hooks/UserContext";
import { Outlet } from "react-router-dom";

const AddBlogPage = ({ id }) => {
  const [{ user }] = useUserContext();
  const [blogDetails, setBlogDetails] = useState({
    author: user?.id,
    title: "",
    image: "",
    body: "",
    category: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"], // toggled buttons

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["blockquote", "code-block"],
      ["link", "formula"],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
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
    return <h1 className=" text-2xl font-Gotham-Bold">{header}</h1>;
  };
  const inputDescription = (description) => {
    return (
      <p className="after:content-['*'] after:text-red-600 after:ml-[2px] text-sm text-gray-500 mb-2 font-Open-Sans">
        {description}
      </p>
    );
  };
  const inputTitle = (header, description) => {
    return (
      <div>
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:3000/blogs/update/${id}`, blogDetails)
        .then((response) => response.data)
        .then((data) => {
          if (data) {
            return toast.success("Blog Updated successfully!");
          } else {
            return toast.error("Something went wrong! Please try again later");
          }
        })
        .catch((err) => console.log(err));
    } else {
      if (
        !blogDetails.title ||
        !blogDetails.author ||
        !blogDetails.image ||
        !blogDetails.image ||
        !blogDetails.body ||
        !blogDetails.category
      ) {
        return toast.error(" All fields must be filled!  ");
      }
      axios
        .post("http://localhost:3000/", blogDetails)
        .then((response) => response.data)
        .then((data) => {
          if (data) {
            return toast.success("Blog Added successfully!");
          } else {
            return toast.error("Something went wrong! Please try again later");
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };
  useEffect(() => {
    const newBlogDetails = () => {
      axios
        .get(`http://localhost:3000/blogs/${id}`)
        .then((response) => response.data)
        .then((data) => {
          setBlogDetails({
            title: data?.title,
            image: data?.image,
            body: data?.body,
            category: data?.category,
          });
        })
        .catch((err) => {
          toast.error(err.message + ". Try again!")
        });
    };
    if (id) {
      newBlogDetails();
    }
  }, [id]);
  return (
    <div>
      <h1 className="text-center font-Open-Sans text-lg">
        {id ? "Edit Blog Post" : "Create a new Blog Post"} 
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

            {blogDetails.image ? (
              <div className="relative w-fit">
                {" "}
                <img
                  src={blogDetails?.image}
                  alt="Blog image"
                  className=" h-[50vh] object-contain"
                />
                <div
                  onClick={() =>
                    setBlogDetails((prevDetails) => {
                      return { ...prevDetails, image: "" };
                    })
                  }
                  className=" absolute top-5 right-5 ring-1 ring-white text-white bg-Primary-500 rounded flex items-center justify-center p-[2px] cursor-pointer"
                >
                  <Close
                    sx={{
                      fontSize: "1.1rem",
                    }}
                  />
                </div>
              </div>
            ) : (
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
                  className=" hidden"
                />
              </label>
            )}
          </div>
          <div>
            {inputTitle("Content", "Provide your content here...")}
            <ReactQuill
              theme="snow"
              placeholder="Start typing here..."
              modules={modules}
              value={blogDetails.body}
              onChange={handleBodyChange}
              className=" h-80 overflow-y-hidden border font-Open-Sans"
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
          <button className="bg-Primary-500 hover:bg-Primary-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default AddBlogPage;
