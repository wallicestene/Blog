import { Search } from "lucide-react";
import HeroImage from "/HeroImage.png";
const Hero = () => {
  return (
    <div>
      <section className="hero relative">
        <div className="imgContainer relative overflow-hidden">
          <img
            src={HeroImage}
            className=" w-screen h-screen object-cover object-center"
            loading="lazy"
            alt="Her image"
          />
        </div>
        <div className="absolute lg:w-1/2 w-11/12 top-1/2 left-1/2 -translate-x-1/2 font-Open-Sans">
          <div className=" h-full  rounded-md bg-gray-50 flex items-center flex-row-reverse p-1">
            <div className=" px-3 py-1 text-center bg-Primary-500 rounded-md text-white cursor-pointer">
              <span>Search</span>
            </div>
            <input
              className=" w-full h-full outline-none bg-transparent indent-2 border-none"
              type="text"
              placeholder="Search blog"
            />
            <div className=" p-1">
              <Search />
            </div>
          </div>
          <div className="  text-white flex gap-x-5 my-5">
            <div className="">
              <p>Popular Categories:</p>
            </div>
            <div>
              <ul className=" flex gap-x-5">
                <li className=" border border-white py-1 px-3 rounded-md bg-Secondary-950/5 overflow-hidden backdrop-blur-md">Design</li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">Technology</li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
