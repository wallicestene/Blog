/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import moment from "moment";

const Banner = ({ data, isLoading, error }) => {
  return (
    <div className=" h-[400px] lg:w-[900px] md:w-11/12 w-full rounded-2xl overflow-hidden mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="relative h-full w-full overflow-hidden  ">
        <img
          src={data[0]?.image}
          alt=""
          className=" object-cover h-full w-full object-center "
          loading="lazy"
        />
        <div className=" absolute bottom-5 left-2 z-10 p-2 space-y-5">
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
    </div>
  );
};

export default Banner;
