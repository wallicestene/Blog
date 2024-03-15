import Logo from "@/assets/Logo";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between h-12 px-4 bg-white shadow">
      <div className="nav-left w-full">
        <Logo />
      </div>
      <div className="nav-center w-full">
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-right w-full">
        <div className=" h-full w-fit rounded bg-gray-50 flex items-center">
            <input className=" w-full h-full outline-none bg-transparent indent-2 border-none" type="text"  placeholder="Search"/>
            <div className=" p-1">
            <Search/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
