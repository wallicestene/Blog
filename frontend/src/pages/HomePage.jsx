/* eslint-disable react/display-name */
import AllBlogs from "@/components/AllBlogs";
import Hero from "@/components/Hero";
import RecentBlogs from "@/components/RecentBlogs";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [, setSearchError] = useState(null);
  const { data, isLoading, error } = useFetch("http://localhost:3000/");

  console.log(data);
  useEffect(() => {
    setLoading(isLoading);
    setSearchError(error);
  }, [isLoading, error]);
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`http://localhost:3000/blogs/search/blog/?search=${search}`)
      .then((response) => response.data)
      .then((data) => {
        setSearchData(data);
        setSearchError(null);
        if (data.length === 0) {
          setSearchError("No blog found!");
          toast.error("No blog found!");
        }
      })
      .catch((err) => setSearchError(err.message))
      .finally(() => setLoading(false));
  });
  return (
    <div className=" mt-[49px]">
      <Hero
        handleOnClick={handleSearch}
        setSearch={setSearch}
        search={search}
        data={data}
        isLoading={isLoading}
        error={error}
        searchData={searchData}
      />
      {!loading && searchData.length > 0 ? (
        <RecentBlogs data={searchData} />
      ) : (
        <RecentBlogs data={data} isLoading={isLoading} error={error} />
      )}

      <AllBlogs data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default HomePage;
