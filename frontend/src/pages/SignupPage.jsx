import { Button } from "@/components/ui/button";
import { Add } from "@mui/icons-material";

const SignupPage = () => {
  return (
    <div className=" mt-[47px] grid  place-items-center w-full">
      <div className=" h-full flex">
        <div className="signUpRight relative border border-black w-full h-full">
          <div className=" h-full w-full">
            <img
              src="/HeroImage.png"
              className=" h-full w-full object-cover object-center"
              alt="Sign up image"
            />
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center text-white text-2xl text-c font-Gotham-Bold">
            <h1>Welcome to the MetaBlog</h1>
          </div>
        </div>
        <div className="sinUpLeft border border-Primary-500 w-full h-full px-6 py-4 ">
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
              <img
                src="https://plus.unsplash.com/premium_photo-1710548651496-59502bba8e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className=" h-12 w-12 rounded-full object-cover"
                alt="Profile"
              />
              <div className="  absolute bottom-0 -right-0 z-10 bg-white rounded-full h-5 w-5 grid place-items-center cursor-pointer">
                <Add
                  sx={{
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center">
            <form className=" mt-5 w-[80%] flex flex-col">
              <label htmlFor="username">
                Username <br />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  required
                  className=" outline-none border-b-2 border-Primary-600 h-10  w-full "
                />
              </label>
              <br />
              <label htmlFor="email" className="">
                Email address: <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className=" outline-none border-b-2 border-Primary-600 h-10   w-full"
                />
              </label>
              <br />
              <label htmlFor="password">
                Email address:
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className=" outline-none border-b-2 border-Primary-600 h-10  w-full "
                />
              </label>
              <br />
              <Button className="">
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
