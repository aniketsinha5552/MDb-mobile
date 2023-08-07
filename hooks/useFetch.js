import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = '2f0c3fdc41e63e90160faf43d6b3010c'

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${key}&language=en-US&page=1`
      );
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
export default useFetch;
