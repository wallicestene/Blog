import BlogComponent from "@/components/BlogComponent";
import { apiUrl } from "@/components/utils/apiConfig";
import { useUserContext } from "@/hooks/UserContext";
import useFetch from "@/hooks/useFetch";
import { Alert } from "@mui/material";
const BlogsPage = () => {
  const [{ user }] = useUserContext();

  const { data, isLoading, error } = useFetch(
    `${apiUrl}blogs/author/${user?.id}`
  );

  return (
    <div>
      {isLoading && <div></div>}
      {error && <Alert severity="error">{error}</Alert>}

      {!isLoading && !error && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data.map((blog) => (
            <BlogComponent blogData={blog} key={blog._id} edit={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
