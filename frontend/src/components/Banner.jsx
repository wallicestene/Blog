import { Avatar } from "@mui/material";

const Banner = () => {
  return (
    <div className=" h-[400px] lg:w-[900px] md:w-500 w-full  overflow-hidden mb-10">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <img src={"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className=" object-cover h-full w-full object-center " loading="lazy" />
            <div className=" absolute bottom-5 left-2 z-10 p-2">
                <div className=" bg-Primary-500 px-3 py-1 rounded-md text-white font-Open-Sans inline-block">
                    <span>Technology</span>
                </div>
                <h1 className=" font-Gotham-Bold text-3xl font-bold text-white">
                    The impact of technology on the workspace: How Technology is Changing
                </h1>
                <div className=" flex items-center gap-x-4 text-white my-3">
                    <Avatar sx={{
                        backgroundColor: "white ",
                        color: "black"
                    }}/>
                    <p>John Doe</p>
                    <p>17th Feb, 2022</p>
                </div>
            </div>
            <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-Secondary-950 from-0% via-Secondary-950 via-[20%]"/>
        </div>
    </div>
  )
}

export default Banner