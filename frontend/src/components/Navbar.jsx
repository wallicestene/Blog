import Logo from "@/assets/Logo";
import { Search } from "@mui/icons-material";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    const [showNavMobile, setShowNavMobile] = useState(false)
  return (
    <div className="fixed z-10 w-full top-0 flex items-center justify-between h-12 px-4 bg-white shadow">
      <div className="nav-left w-full">
        <Logo />
      </div>
      <div className="nav-center hidden lg:block md:block w-full">
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-right hidden lg:block md:block w-full">
        <div className=" h-full w-fit rounded bg-gray-50 flex items-center">
          <input
            className=" w-full h-full outline-none bg-transparent indent-2 border-none"
            type="text"
            placeholder="Search"
          />
          <div className=" p-1">
            <Search />
          </div>
        </div>
      </div>
      <div className=" lg:hidden md:hidden" onClick={() => setShowNavMobile(!showNavMobile)}>
        {
            showNavMobile ? <X/> : <Menu/>
        }
      </div>
      {
        showNavMobile && (
           <div className="lg:hidden md:hidden fixed z-10 bg-white top-14 right-0 w-1/2">
             <NavbarMobile/>
           </div>
        )
      }
    </div>
  );
};

export default Navbar;
