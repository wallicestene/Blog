import AllBlogs from "@/components/AllBlogs"
import Hero from "@/components/Hero"
import RecentBlogs from "@/components/RecentBlogs"

const HomePage = () => {
  return (
    <div className=" mt-[49px]">
      <Hero/>
      <RecentBlogs/>
      <AllBlogs/>
    </div>
  )
}

export default HomePage