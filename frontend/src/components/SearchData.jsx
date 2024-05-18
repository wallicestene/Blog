/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { ArrowForward } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useState } from "react";
import BlogSkeleton from "./BlogSkeleton";
import BlogComponent from "./BlogComponent";

const SearchData = ({ data, isLoading, error }) => {
  const [skeletons] = useState([1, 2, 3]);
  return (
    <div className="relative w-full h-full">
        <div>
            <h2 className="absolute top-2 left-2 z-20 text-white bg-Primary-500 p-2 rounded-md m-2 text-xl font-bold font-Gotham-Bold">
                Search Results
            </h2>
        </div>
      {error && (
        <div>
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4 h-full  lg:w-11/12 w-full mx-auto place-items-center">
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
};

export default SearchData;
