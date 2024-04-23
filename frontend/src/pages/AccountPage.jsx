import AccountPageOptions from "@/components/AccountPageOptions";
import { useUserContext } from "@/hooks/UserContext";
import { AccountCircle, AddCircle, Article } from "@mui/icons-material";

const AccountPage = () => {
  const [{ user }] = useUserContext();
  return (
    <div className=" pt-16 h-screen flex gap-3 w-full ">
      <div className="acc-right border flex-[0.2] border-black h-full w-full p-2 bg-Secondary-950 text-white font-Open-Sans">
        <div className=" text-lg font-bold my-1">
          <h1>{user?.username}</h1>
        </div>
        <hr className=" border border-Secondary-800 rounded" />
        <div className=" space-y-2 mt-2">
          <AccountPageOptions Icon ={AccountCircle} title ={"Profile"} />
          <AccountPageOptions Icon ={Article} title ={"Blogs"} />
          <AccountPageOptions Icon ={AddCircle} title ={"Add blog"} />
        </div>
      </div>

      <div className="acc-left  border flex-[0.8] border-blue-700 h-full w-full"></div>
    </div>
  );
};

export default AccountPage;
