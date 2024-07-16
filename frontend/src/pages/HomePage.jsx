/* eslint-disable react/display-name */
import AllBlogs from "@/components/AllBlogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentBlogs from "@/components/RecentBlogs";
import { apiUrl } from "@/components/utils/apiConfig";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [, setSearchError] = useState(null);
  const { data, isLoading, error } = useFetch(`${apiUrl}`);

  useEffect(() => {
    setLoading(isLoading);
    setSearchError(error);
  }, [isLoading, error]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`${apiUrl}blogs/search/blog/?search=${search}`)
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
  };
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
      <Footer />
    </div>
  );
};

export default HomePage;
