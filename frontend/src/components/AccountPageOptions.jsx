import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AccountPageOptions = ({ Icon, title, sub_page }) => {
  return (
    <div>
      <button className=" text-sm hover:bg-Secondary-900 hover:transition-colors w-full hover:ease-linear duration-300 delay-75 hover:cursor-pointer rounded tracking-normal font-Gotham-Light focus:bg-Secondary-900">
        <Link
          to={sub_page}
          className=" flex w-full items-center space-x-1 px-1 py-2"
        >
          <Avatar
            sx={{
              bgcolor: "#4e527f",
            }}
          >
            <Icon />
          </Avatar>
          <span>{title}</span>
        </Link>
      </button>
    </div>
  );
};

export default AccountPageOptions;
