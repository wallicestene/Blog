import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollUp from "./components/ScrollUp";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollUp/>
      <Outlet />
    </div>
  );
};

export default Layout;
