/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import BlogComponent from "./BlogComponent";
import BlogSkeleton from "./BlogSkeleton";
import { Alert } from "@mui/material";

const AllBlogs = ({ data, isLoading, error }) => {
  const [skeletons] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="lg:w-[75%] md:w-[90%] w-full p-5 mx-auto space-y-4">
      <div className="my-5">
        <div>
          <h2 className="text-xl font-bold font-Gotham-Bold">All Blogs</h2>
          <p className=" font-Open-Sans text-sm tracking-wide">
            Here's what we've been up to recently.
          </p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4 w-full ">
        {isLoading &&
          skeletons
            .slice(0, 2)
            .map((skeleton) => <BlogSkeleton key={skeleton} />)}

        {!error && !isLoading && (
          <>
            {data.slice(0, 2).map((blog, index) => (
              <BlogComponent key={index} blogData={blog} />
            ))}
          </>
        )}
      </div>

      {error && (
        <div>
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4 w-full ">
        {isLoading &&
          skeletons
            .slice(2, skeletons.length)
            .map((skeleton) => <BlogSkeleton key={skeleton} />)}

        {!error && !isLoading && (
          <>
            {data.slice(2, data.length).map((blog, index) => (
              <BlogComponent key={index} blogData={blog} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
