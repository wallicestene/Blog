import { Skeleton } from "./ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      <Skeleton className=" w-full h-full bg-gray-900" />{" "}
      <Skeleton className=" absolute top-2 left-2 w-[45%] h-7 bg-gray-800" />
      <div className="absolute bottom-5 left-0 right-0 p-2  w-full  z-10 space-y-5">
        <Skeleton className=" w-[50%] h-7 bg-gray-800" />
        <div className="flex items-center justify-between w-full">
          <div className=" flex items-center w-full space-x-2">
            <Skeleton className="  w-12 h-12 rounded-full bg-gray-800" />
            <Skeleton className=" w-[40%] h-3 bg-gray-800" />
          </div>
          <Skeleton className=" w-[30%] h-3 bg-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
