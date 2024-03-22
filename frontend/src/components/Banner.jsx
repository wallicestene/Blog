/* eslint-disable react/prop-types */
import { Alert, Avatar } from "@mui/material";
import moment from "moment";
import { Skeleton } from "./ui/skeleton";

const Banner = ({ data, isLoading, error }) => {
  return (
    <div className="relative h-[400px] lg:w-[900px] md:w-11/12 w-full rounded-2xl overflow-hidden mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10 bg-white">
      {isLoading && (
        <>
          <Skeleton className=" absolute top-0 left-0  w-full h-full bg-gray-900" />
          <div className=" absolute bottom-5 left-0 p-5 flex items-end justify-between w-full">
            <div className=" space-y-5">
              <Skeleton className=" w-40 h-6 bg-gray-800" />
              <Skeleton className="  w-56 h-7 bg-gray-800" />
              <div className=" flex items-center space-x-4">
                <Skeleton className="  w-12 h-12 rounded-full bg-gray-800" />
                <Skeleton className=" w-32 h-3 bg-gray-800" />
                <Skeleton className=" w-28 h-3 bg-gray-800" />
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
        <div className="relative h-full w-full overflow-hidden  ">
          <img
            src={data[0]?.image}
            alt=""
            className=" object-cover h-full w-full object-center "
            loading="lazy"
          />
          <div className=" absolute bottom-5 left-2 z-10 p-5 space-y-5">
            <div className=" bg-Primary-500 px-3 py-1 rounded-md first-letter:uppercase text-white font-Open-Sans inline-block tracking-wide">
              <span>{data[0]?.category}</span>
            </div>
            <h1 className=" font-Gotham-Bold text-3xl font-bold text-white">
              {data[0]?.title}
            </h1>
            <div className=" flex items-center gap-x-4 text-white font-Gotham-Light text-sm">
              <Avatar
                sx={{
                  backgroundColor: "white ",
                  color: "black",
                }}
              />
              <p>John Doe</p>
              <p>{moment(data[0]?.createdAt).format("Do MMM YYYY")}</p>
            </div>
          </div>
          <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[14%]" />
        </div>
      )}
    </div>
  );
};

export default Banner;
