import { useUserContext } from "@/hooks/UserContext";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null);
  const [{ user }, dispatch] = useUserContext();
  console.log(user);
  const LogOutUser = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
    setRedirect("/");
  };
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="lg:w-1/2 w-full grid place-items-center border border-gray-300 shadow-lg shadow-gray-400 rounded-lg overflow-hidden font-Open-Sans">
      <div className="relative flex items-center gap-2 bg-gradient-to-l from-rose-400 via-fuchsia-500 rounded-b-lg to-indigo-500 h-52 w-full">
        <img
          className=" absolute h-full w-full object-cover "
          src={`http://localhost:3000/uploads/${user?.profile}`}
          alt=""
        />
        <div className=" absolute z-10 -bottom-24 right-1/2 translate-x-1/2 -translate-y-1/2">
          <Avatar
            src={`http://localhost:3000/uploads/${user?.profile}`}
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "#0F172A",
              fontSize: "3rem",
            }}
          >
            {user?.username[0]}
          </Avatar>
        </div>
      </div>
      <div className="w-full p-5">
        <div className=" mt-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tight">
            Hello, {user?.username}!
          </h1>
        </div>
        <div className="my-4 h-12 text-gray-600 text-[1rem] flex items-center justify-center rounded-lg ">
          <p>{user?.email}</p>
        </div>
        <div>
          <button
            onClick={LogOutUser}
            className="inline-flex text-lg items-center justify-center h-12 px-10 py-0 font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-Secondary-950 border-solid rounded-lg cursor-pointer select-none hover:text-white hover:bg-Secondary-950 w-full hover:border-white focus:shadow-xs focus:no-underline"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
