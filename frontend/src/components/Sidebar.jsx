import AccountPageOptions from "./AccountPageOptions";
import {
  AccountCircle,
  AddCircle,
  Article,
  HomeRounded,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <>
      <AccountPageOptions Icon={HomeRounded} title={"Home"} sub_page={"/"} />
      <div className=" space-y-2 mt-2 ">
        <AccountPageOptions
          Icon={AccountCircle}
          title={"Profile"}
          sub_page={"/myAccount/profile"}
        />
        <AccountPageOptions
          Icon={Article}
          title={"Blogs"}
          sub_page={"/myAccount/blogs"}
        />
        <AccountPageOptions
          Icon={AddCircle}
          title={"Add blog"}
          sub_page={"/myAccount/add-blog"}
        />
      </div>
    </>
  );
};

export default Sidebar;
