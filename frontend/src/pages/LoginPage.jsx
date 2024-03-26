/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/logIn", {
        ...userDetails,
      })
      .then((response) => response.data)
      .then((user) => {
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user.token));
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };
  return (
    <div className=" mt-[50px] grid place-items-center h-screen w-screen ">
      <div className=" lg:h-[90%] lg:w-[90%] md:h-full h-full w-full grid lg:grid-cols-2 grid-cols-1 overflow-hidden p-4">
        <div className="signUpRight relative  w-full h-full ">
          <div className="relative h-full w-full  overflow-hidden rounded-xl ">
            <img
              src="/HeroImage.png"
              className=" h-full w-full object-cover object-center "
              alt="Sign up image"
            />
            <div className=" absolute top-0 right-0 bg-Secondary-900/60 h-full w-full" />
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center text-white">
            <h1 className=" text-2xl font-Gotham-Bold">
              Welcome to the MetaBlog
            </h1>
            <p className=" font-Gotham-Light text-sm">
              Empowering Next-Generation Content Creation
            </p>
          </div>
        </div>
        <div className="sinUpLeft  w-full h-full p-4 grid place-items-center  ">
          <div className="text-center">
            <h1 className=" text-2xl font-Gotham-Bold ">
              Welcome to the MetaBlog
            </h1>
            <p className=" font-Gotham-Light text-sm">
              Don't have an account?{" "}
              <Link to={"/signup"} className=" text-Primary-700">
                Sign up
              </Link>
            </p>
          </div>
          <div className=" w-full h-full flex flex-col items-center font-Open-Sans tracking-wide">
            <form
              className=" w-[80%] flex flex-col"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email" className="">
                Email address <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={userDetails.email}
                  onChange={handleOnchange}
                  className=" outline-none border-b-2 border-Primary-600 h-8   w-full"
                />
              </label>
              <br />
              <label htmlFor="password">
                Password
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={userDetails.password}
                  onChange={handleOnchange}
                  className=" outline-none border-b-2 border-Primary-600 h-8  w-full "
                />
              </label>
              <br />
              {error && (
                <Alert severity="error" className=" mb-5">
                  {error}
                </Alert>
              )}
              <Button className="">Log in</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
