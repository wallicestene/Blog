import AllBlogs from "@/components/AllBlogs"
import Hero from "@/components/Hero"
import RecentBlogs from "@/components/RecentBlogs"
import useFetch from "@/hooks/useFetch"

const HomePage = () => {
  const {data, isLoading, error} = useFetch("http://localhost:3000/")
  return (
    <div className=" mt-[49px]">
      <Hero/>
      <RecentBlogs/>
      <AllBlogs/>
    </div>
  )
}

export default HomePage