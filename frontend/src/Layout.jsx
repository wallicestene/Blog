import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollUp from "./components/ScrollUp";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollUp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
