/* eslint-disable react/no-unescaped-entities */
import BlogComponent from "./BlogComponent";

const AllBlogs = () => {
    const blogs = [1, 2, 3,4,5,6,7,8,9];
    return (
      <div className="lg:w-[75%] md:w-[90%] w-full p-5 mx-auto space-y-4">
        <div className="my-5">
          <div>
            <h2 className="text-xl font-bold font-Gotham-Bold">All Blogs</h2>
            <p className=" font-Open-Sans text-sm tracking-wide">
              Here's what we've been up to recently.
            </p>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4 w-full ">
          {blogs.slice(0,2).map((blog, index) => (
            <BlogComponent key={index} img="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"/>
          ))}
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5  gap-x-4 w-full ">
          {blogs.slice(3,blogs.length).map((blog, index) => (
            <BlogComponent key={index} img = "https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          ))}
        </div>
      </div>
  )
}

export default AllBlogs