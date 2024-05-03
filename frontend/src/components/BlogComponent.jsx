/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Avatar } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";

const BlogComponent = ({ blogData }) => {
  const extractContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const firstParagraph = doc.querySelector("p"); // Select the first <p> tag
    return firstParagraph ? firstParagraph.innerHTML.substring(0, 120) : ""; // return text.substring(0, 150); // Display only the first 20 characters
  };
  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group">
      <Link to={`/blogs/single-blog/${blogData?._id}`}>
        <img
          src={`http://localhost:3000/uploads/${blogData?.image}`}
          alt=""
          loading="lazy"
          className=" object-cover w-full h-full transition-transform group-hover:scale-125 delay-50 ease-in-out duration-500 "
        />
        <div className=" absolute bottom-5 left-0 right-0 p-2 z-10 text-white">
          <h2 className=" my-1 text-2xl tracking-wide font-Gotham-Bold font-bold">
            {blogData?.title}
          </h2>
          {/* <div className="blogComp" dangerouslySetInnerHTML={{ __html: blogData?.body }} /> */}
          <p className=" text-sm font-Open-Sans">{extractContent(blogData?.body) + "..."}</p>
          <div className=" flex items-center justify-between text-[0.75rem] mt-3 font-Gotham-Light">
            <div className=" flex items-center gap-1">
              <Avatar
                sx={{
                  backgroundColor: "white ",
                  color: "black",
                  width: "30px",
                  height: "30px",
                }}
              />
              <p>John Doe</p>
            </div>
            <p>{moment(blogData?.createdAt).format("Do MMM YYYY")}</p>
          </div>
        </div>
        <div className=" absolute z-10 top-2 left-2 bg-Primary-100/80 px-3 py-1 rounded-md text-Primary-600 font-Open-Sans inline-block tracking-wider text-[0.8rem]">
          <span>Technology</span>
        </div>
        <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[12%]" />
      </Link>
    </div>
  );
};

export default BlogComponent;
