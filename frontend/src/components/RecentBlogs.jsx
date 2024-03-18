/* eslint-disable react/no-unescaped-entities */

import { ArrowForward } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const RecentBlogs = () => {
  const blogs = [1, 2, 3];
  return (
    <div className=" lg:mt-[240px] md:mt-[370] mt-[370px] mb-5 w-[75%] mx-auto ">
      <div className=" flex items-center justify-between my-10">
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
          <div
            key={index}
            className="relative h-96 w-full rounded-lg overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" object-cover w-full h-full"
            />
            <div className=" absolute bottom-5 left-2 right-2 p-2 z-10 text-white">
              <h2 className=" my-3 text-2xl tracking-wide font-Gotham-Bold font-bold">
                Future of work
              </h2>
              <p className="  text-sm tracking-wide leading-6 font-Open-Sans">
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
            <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[12%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
