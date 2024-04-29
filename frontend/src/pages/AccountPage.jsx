import AccountPageOptions from "@/components/AccountPageOptions";
import { useUserContext } from "@/hooks/UserContext";
import { AccountCircle, AddCircle, Article } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import BlogsPage from "./BlogsPage";
const AccountPage = () => {
  const [{ user }] = useUserContext();
  const { subPage } = useParams();
  return (
    <div className=" pt-16 h-screen flex gap-3">
      <div className="acc-left flex-[0.2] h-full w-full p-2 bg-Secondary-950 text-white font-Open-Sans">
        <div className=" text-lg font-bold my-1">
          <h1>{user?.username}</h1>
        </div>
        <hr className=" border border-Secondary-800 rounded" />
        <div className=" space-y-2 mt-2">
          <AccountPageOptions
            Icon={AccountCircle}
            title={"Profile"}
            sub_page={"/myAccount/profile"}
          />
          <AccountPageOptions
            Icon={Article}
            title={"blogs"}
            sub_page={"/myAccount/Blogs"}
          />
          <AccountPageOptions
            Icon={AddCircle}
            title={"Add blog"}
            sub_page={"/myAccount/add-blog"}
          />
        </div>
      </div>

      <div className="acc-right flex-[0.8] h-full w-full overflow-y-scroll scroll-smooth p-4">
        {(subPage === undefined || subPage === "profile") && <ProfilePage />}
        {subPage === "Blogs" && <BlogsPage />}
      </div>
    </div>
  );
};

export default AccountPage;
