import { Button } from "@/components/ui/button";
import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    profile: "",
    email: "",
    password: "",
  });
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
      .post("http://localhost:3000/signUp", {
        ...userDetails,
      })
      .then((result) => result.data)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.token));
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
      
  };
  const uploadProfile = (e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("image", files[0]);
    axios
      .post("http://localhost:3000/blogs/image-upload", formData)
      .then((response) => response.data)
      .then((image) => {
        setUserDetails((prevDetails) => {
          return { ...prevDetails, profile: image };
        });
      });
  };
  console.log(userDetails);
  return (
    <div className=" mt-[50px] grid place-items-center h-screen w-screen ">
      <div className=" lg:h-[85%] lg:w-[90%] md:h-full h-full w-full grid lg:grid-cols-2 grid-cols-1 overflow-hidden p-4">
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
        <div className="sinUpLeft  w-full h-full p-4  ">
          <div className="text-center">
            <h1 className=" text-2xl font-Gotham-Bold ">
              Welcome to the MetaBlog
            </h1>
            <p className=" font-Gotham-Light text-sm">
              Already have account?{" "}
              <span className=" text-Primary-700">Log in</span>
            </p>
          </div>
          <div className="w-full  grid place-items-center my-3">
            <div className="relative overflow-hidden">
              <Avatar
                sx={{
                  height: "3rem",
                  width: "3rem",
                  backgroundColor: "white",
                  color: "black",
                }}
                src={`http://localhost:3000/uploads/${userDetails.profile}`}
              />
              <label className="  absolute bottom-0 -right-0 z-10 bg-white rounded-full h-5 w-5 grid place-items-center cursor-pointer">
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={uploadProfile}
                  className=" hidden"
                />
                <Add
                  sx={{
                    fontSize: "1rem",
                  }}
                />
              </label>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center font-Open-Sans tracking-wide">
            <form
              className=" mt-3 w-[80%] flex flex-col"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username">
                Username <br />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  required
                  value={userDetails.username}
                  onChange={handleOnchange}
                  className=" outline-none border-b-2 border-Primary-600 h-8  w-full "
                />
              </label>
              <br />
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
              <Button className="">Sign up</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
