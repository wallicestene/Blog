import BlogComponent from "@/components/BlogComponent";
import useFetch from "@/hooks/useFetch";
import { Alert } from "@mui/material";
const BlogsPage = () => {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/blogs/author/65f20eacad0a8597c5ad3364`
  );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <Alert severity="error">{error}</Alert>}

      {data.length > 0 && !isLoading && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data.map((blog) => (
            <BlogComponent blogData={blog} key={blog._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
