import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          if (!response.status >= 200 && response.status < 300) {
            throw new Error("Failed to fetch data");
          } else {
            return response.data;
          }
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
