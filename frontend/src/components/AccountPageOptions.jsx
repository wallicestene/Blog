import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AccountPageOptions = ({ Icon, title, sub_page }) => {
  return (
    <div>
      <Link to={sub_page}>
        <button className="flex items-center space-x-1 px-1 py-2 text-sm hover:bg-Secondary-900 hover:transition-colors w-full hover:ease-linear duration-300 delay-75 hover:cursor-pointer rounded tracking-normal font-Gotham-Light focus:bg-Secondary-900">
          <Avatar
            sx={{
              bgcolor: "#4e527f",
            }}
          >
            <Icon />
          </Avatar>
          <span>{title}</span>
        </button>
      </Link>
    </div>
  );
};

export default AccountPageOptions;
