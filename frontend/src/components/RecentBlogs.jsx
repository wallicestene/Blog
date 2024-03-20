/* eslint-disable react/no-unescaped-entities */

import { ArrowForward } from "@mui/icons-material";
import BlogComponent from "./BlogComponent";

const RecentBlogs = () => {
  const blogs = [1, 2, 3];
  return (
    <div className=" lg:mt-[240px] my md:mt-[370] mt-[360px] lg:w-[75%] md:w-[90%] w-full p-5 mx-auto ">
      <div className=" flex items-center justify-between my-5">
        <div>
          <h2 className="text-xl font-bold font-Gotham-Bold">Recent Blogs</h2>
          <p className=" font-Open-Sans text-sm tracking-wide">
            Here's what we've been up to recently.
          </p>
        </div>
        <div>
          <button className=" flex items-center justify-between border-2 border-Primary-600 px-2 py-1 rounded-md w-24 font-Open-Sans text-sm text-Primary-600 font-semibold ">
            <span>View all</span>
            <ArrowForward
              sx={{
                fontSize: "1rem",
              }}
            />
          </button>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4  lg:w-11/12 w-full mx-auto">
        {blogs.map((blog, index) => (
         <BlogComponent key={index} img="https://images.unsplash.com/photo-1686163812333-391a9f514ce0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
