import useFetch from "@/hooks/useFetch";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Alert, Avatar, CircularProgress } from "@mui/material";
import moment from "moment";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/blogs/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-[49px] py-2 w-11/12 mx-auto space-y-2">
      {error && (
        <div>
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      )}
      {data && !isLoading && (
        <>
          <div className=" lg:w-11/12 mx-auto ">
            <div className=" flex items-center lg:text-sm text-xs font-Gotham-Light my-2 hover:underline ">
              <KeyboardArrowLeft />
              <button onClick={() => history("/")}>Back to Home</button>
            </div>
            <div className=" bg-Primary-500 px-3 py-1 rounded-md first-letter:uppercase text-white font-Open-Sans inline-block tracking-wide">
              <span>{data?.category}</span>
            </div>
            <h1 className=" my-3 text-4xl font-Gotham-Bold text-Secondary-950">
              {data?.title}
            </h1>
            <div className=" flex items-center space-x-4 text-Secondary-900  text-[0.75rem] mt-3 font-Gotham-Light tracking-wide font-bold">
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
          <div className="singleMid lg:w-11/12 mx-auto w-full lg:h-[80vh] h-[50vh] overflow-hidden rounded">
            <img
              src={`http://localhost:3000/uploads/${data.image}`}
              loading="lazy"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="singleBottom lg:w-11/12 mx-auto ">
            <article className=" prose-base font-Open-Sans prose-headings:font-semibold prose-h1:font-Gotham-Bold prose-headings:text-Secondary-950 prose-headings:first-letter:uppercase">
              <div
                className="ql-editor "
                dangerouslySetInnerHTML={{ __html: data.body }}
              />
            </article>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBlogPage;
