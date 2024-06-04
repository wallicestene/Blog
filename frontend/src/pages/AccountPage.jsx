import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import BlogsPage from "./BlogsPage";
import AddBlogPage from "./AddBlogPage";
import Sidebar from "@/components/Sidebar";
const AccountPage = () => {
  const { subPage } = useParams();

  return (
    <div className=" pt-16 h-screen flex gap-3">
      <div className="acc-left flex-[0.2] h-full w-full p-2 bg-Secondary-950 text-white font-Open-Sans divide-y divide-Secondary-800 rounded-md">
        <Sidebar />
      </div>

      <div className="acc-right flex-[0.8] h-full w-full overflow-y-scroll scroll-smooth p-4 bg-Secondary-50 rounded-md">
        {(subPage === undefined || subPage === "profile") && <ProfilePage />}
        {subPage === "blogs" && <BlogsPage />}
        {subPage === "add-blog" && <AddBlogPage />}
      </div>
    </div>
  );
};

export default AccountPage;
