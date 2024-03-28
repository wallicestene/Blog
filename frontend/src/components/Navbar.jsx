import Logo from "@/assets/Logo";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, List, ListItem, ListItemButton } from "@mui/material";
import { useUserContext } from "@/hooks/UserContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navbar = () => {
  const [{ user }] = useUserContext();
  return (
    <div className="fixed z-20 w-full top-0 flex items-center justify-between h-12 px-4 bg-white shadow  space-x-2">
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
      {user ? (
        <Link
          to={"/login"}
          className=" bg-Primary-500 text-white rounded-full w-fit text-whit cursor-pointer space-x-2 font-Gotham-Light"
        >
          <div className=" flex items-center space-x-1 ">
            <Avatar
              sx={{
                backgroundColor: "white",
                color: "black",
                height: "2.25rem",
                width: "2.25rem"
              }}
              src={`http://localhost:3000/uploads/${user.profile}`}
            />{" "}
            <p className=" hidden lg:block md:block pr-2 first-letter:uppercase text-sm">
              {user?.username}
            </p>
          </div>
        </Link>
      ) : (
        <Link to={"/login"}>
          <Avatar
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
          />
        </Link>
      )}
      <div className=" lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className=" h-9 w-9" />
          </SheetTrigger>
          <SheetContent>
            <nav className=" h-full w-full">
              <List>
                <ListItem>
                  <ListItemButton>
                    <Link to="/">Home</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Link to="/">Blog</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Link to="/">Pages</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <Link to="/">Contact</Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
