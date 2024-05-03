/* eslint-disable react/prop-types */
import { Alert, Avatar } from "@mui/material";
import moment from "moment";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = ({ data, isLoading, error }) => {
  const [bannerData, setBannerData] = useState(null);
  useEffect(() => {
    const randomBannerData = () => {
      const index = Math.floor(Math.random() * data.length);
      setBannerData(data[index]);
    };
    // initial call
    randomBannerData();
    if (data.length > 1) {
      const intervalId = setInterval(randomBannerData, 60000);
      return () => clearInterval(intervalId); // clean up on unmount
    }
  }, [data, data.length]);
  const extractContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const firstParagraph = doc.querySelector("p"); // Select the first <p> tag
    return firstParagraph ? firstParagraph.innerHTML.substring(0, 185) : ""; // return text.substring(0, 150); // Display only the first 20 characters
  };
  return (
    <div className="relative h-[400px] lg:w-[900px] md:w-11/12 w-full rounded-2xl overflow-hidden mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10 bg-white">
      {isLoading && (
        <>
          <Skeleton className=" absolute top-0 left-0  w-full h-full bg-gray-900" />
          <div className=" absolute bottom-5 left-0 p-5 flex items-end justify-between w-full">
            <div className=" space-y-5 w-full">
              <Skeleton className=" w-[30%] h-6 bg-gray-800" />
              <Skeleton className="  w-[50%] h-7 bg-gray-800" />
              <div className=" flex items-center space-x-4 w-full">
                <Skeleton className="  w-10 h-10 rounded-full bg-gray-800" />
                <Skeleton className=" w-[25%] h-3 bg-gray-800" />
                <Skeleton className=" w-[20%] h-3 bg-gray-800" />
              </div>
            </div>
          </div>
        </>
      )}
      {error && (
        <div>
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      {data?.length > 0 && !isLoading && (
        <div className="relative h-full w-full overflow-hidden  group">
          <Link to={`/blogs/single-blog/${bannerData?._id}`}>
            <img
              src={`http://localhost:3000/uploads/${bannerData?.image}`}
              alt=""
              className=" object-cover h-full w-full object-center transition-transform group-hover:scale-125 delay-50 ease-in-out duration-500"
              loading="lazy"
            />
            <div className=" absolute bottom-5 left-2 z-10 p-5 space-y-3">
              <div className=" bg-Primary-500 px-3 py-1 rounded-md first-letter:uppercase text-white font-Open-Sans inline-block tracking-wide">
                <span>{bannerData?.category}</span>
              </div>
              <h1 className=" font-Gotham-Bold text-3xl font-bold text-white">
                {bannerData?.title}
              </h1>
              <p className=" text-sm font-Open-Sans text-white">
                {extractContent(bannerData?.body) + "..."}
              </p>

              <div className=" flex items-center gap-x-4 text-white font-Gotham-Light text-sm">
                <Avatar
                  sx={{
                    backgroundColor: "white ",
                    color: "black",
                  }}
                />
                <p>John Doe</p>
                <p>{moment(bannerData?.createdAt).format("Do MMM YYYY")}</p>
              </div>
            </div>

            <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[14%]" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Banner;
