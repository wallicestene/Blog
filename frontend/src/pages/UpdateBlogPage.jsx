import Sidebar from "@/components/Sidebar";
import AddBlogPage from "./AddBlogPage";
import { useParams } from "react-router-dom";

const UpdateBlogPage = () => {
  const { id } = useParams();

  return (
    <div className=" pt-16 h-screen flex gap-3">
      <div className="acc-left flex-[0.2] h-full w-full p-2 bg-Secondary-950 text-white font-Open-Sans">
        <Sidebar />
      </div>
      <div className="acc-right flex-[0.8] h-full w-full overflow-y-scroll scroll-smooth p-4">
        <AddBlogPage id={id} />
      </div>
    </div>
  );
};

export default UpdateBlogPage;
