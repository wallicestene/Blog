/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Avatar } from "@mui/material";

const BlogComponent = ({img}) => {
  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <img
        src={img}
        alt=""
        className=" object-cover w-full h-full"
      />
      <div className=" absolute bottom-5 left-2 right-2 p-2 z-10 text-white">
        <h2 className=" my-3 text-2xl tracking-wide font-Gotham-Bold font-bold">
          Future of work
        </h2>
        <p className="  text-[0.8rem] tracking-wide font-Gotham-Light">
          Majority of people will work in jobs that don't exist today.
        </p>
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
          <p>17 May</p>
        </div>
      </div>
      <div className=" absolute z-10 top-2 left-2 bg-Primary-100/80 px-3 py-1 rounded-md text-Primary-600 font-Open-Sans inline-block tracking-wider text-[0.8rem]">
            <span>Technology</span>
          </div>
      <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[12%]" />
    </div>
  );
};

export default BlogComponent;
