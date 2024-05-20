/* eslint-disable react/prop-types */
import { Search } from "lucide-react";
// import HeroImage from "/HeroImage.png";
import Banner from "./Banner";
import ParticleComponent from "./ParticleComponent";
import SearchData from "./SearchData";
const Hero = ({
  data,
  isLoading,
  error,
  setSearch,
  search,
  handleOnClick,
  searchData,
}) => {
  return (
    <div>
      <section className="hero relative">
        <div className="imgContainer relative overflow-hidden">
          <ParticleComponent />
          <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[20%]" />
        </div>
        <div className="absolute w-full grid place-items-center top-1/2 left-1/2 -translate-x-1/2 font-Open-Sans">
          <form
            onSubmit={handleOnClick}
            className={`h-full lg:w-1/2 w-11/12 rounded-md bg-gray-50 flex items-center flex-row-reverse p-1`}
          >
            <button className="bg-Primary-500 hover:bg-Primary-700 text-white font-bold py-2 px-4 rounded">
              <span>Search</span>
            </button>

            <input
              className=" w-full h-full outline-none bg-transparent indent-2 border-none"
              type="text"
              placeholder="Search blog"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className=" p-1">
              <Search />
            </div>
          </form>
          <div className="  text-white my-5 flex-wrap">
            <div>
              <ul className=" flex gap-x-5 flex-wrap">
                <li className=" border border-white py-1 px-3 rounded-md bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Design
                </li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Technology
                </li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Coding
                </li>
              </ul>
            </div>
          </div>
          <div className="banner h-[405px] lg:w-[900px] md:w-11/12 w-full rounded-2xl overflow-y-scroll mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10 bg-white">
            {search && searchData.length > 0 ? (
              <SearchData data={searchData} />
            ) : (
              <Banner data={data} isLoading={isLoading} error={error} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
