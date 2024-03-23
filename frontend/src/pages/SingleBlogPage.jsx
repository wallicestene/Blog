import useFetch from "@/hooks/useFetch";
import { Avatar } from "@mui/material";
import moment from "moment";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/blogs/${id}`
  );
  return (
    <div className=" mt-[49px] py-2 w-11/12 mx-auto">
      <div className=" p-2">
        <div className=" bg-Primary-500 px-3 py-1 rounded-md first-letter:uppercase text-white font-Open-Sans inline-block tracking-wide">
          <span>{data?.category}</span>
        </div>
        <h1 className=" my-3 text-2xl tracking-wide font-Gotham-Bold">
          {data?.title}
        </h1>
        <div className=" flex items-center space-x-4 text-gray-500 text-[0.75rem] mt-3 font-Gotham-Light tracking-wide font-bold">
          <div className=" flex items-center gap-2">
            <Avatar
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <p>John Doe</p>
          </div>
          <p>{moment(data?.createdAt).format("Do MMM YYYY")}</p>
        </div>
      </div>
      <div className="singleMid lg:w-11/12 w-full lg:h-[80vh] h-[50vh] overflow-hidden rounded">
        <img
          src={data.image}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="singleBottom">
        <article>
          <div className=" w-full space-x-3">
            {data.body?.map((bodyItem, index) => (
              <div key={index} className=" space-y-1">
                <h1 className="text-xl mt-2 leading-7 font-Gotham-Bold text-Secondary-950">
                  {bodyItem.heading}
                </h1>
                <p className=" font-Open-Sans text-md text-Primary-950">{bodyItem.paragraph}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleBlogPage;
