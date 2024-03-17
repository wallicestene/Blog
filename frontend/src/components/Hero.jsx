import { Search } from "lucide-react";
import HeroImage from "/HeroImage.png";
const Hero = () => {
  return (
    <div>
      <section className="hero relative bg-black">
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
      </div>
      </section>
    </div>
  );
};

export default Hero;
