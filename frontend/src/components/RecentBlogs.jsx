/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { ArrowForward } from "@mui/icons-material";
import BlogComponent from "./BlogComponent";
import { Alert } from "@mui/material";
import BlogSkeleton from "./BlogSkeleton";
import {useState } from "react";

const RecentBlogs = ({ data, isLoading, error }) => {
  const [skeletons] = useState([1, 2, 3]);
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

      {error && (
        <div>
          <Alert severity="error">{error}</Alert>
        </div>
      )}

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4  lg:w-11/12 w-full mx-auto">
        {isLoading &&
          skeletons.map((skeleton) => <BlogSkeleton key={skeleton} />)}
        {!error && !isLoading && (
          <>
            {data?.slice(0, 3).map((blog, index) => (
              <BlogComponent key={index} blogData={blog} />
            ))}{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default RecentBlogs;
