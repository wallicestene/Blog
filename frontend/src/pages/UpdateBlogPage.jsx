import AddBlogPage from "./AddBlogPage";
import AccountPageOptions from "@/components/AccountPageOptions";
import { AccountCircle, AddCircle, Article } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const UpdateBlogPage = () => {
  const { id } = useParams();

  return (
    <div className=" pt-16 h-screen flex gap-3">
      <div className="acc-left flex-[0.2] h-full w-full p-2 bg-Secondary-950 text-white font-Open-Sans">
        <div className=" space-y-2 mt-2">
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
      </div>
      <div className="acc-right flex-[0.8] h-full w-full overflow-y-scroll scroll-smooth p-4">
        <AddBlogPage id={id} />
      </div>
    </div>
  );
};

export default UpdateBlogPage;
