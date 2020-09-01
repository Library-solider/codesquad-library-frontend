import { useEffect, useState } from "react";

export const useFetch = (url, dependenceArr) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await fetch(url);
        const initialData = await response.json();
        setResponse(initialData);
      } catch (error) {
        setError(error);
      }
    };

    initialFetch();
  }, []);

  return { response, error };
};

export const useFetch_2 = (url, options, dependenceArr) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, ...dependenceArr]);

  return { response, error, isLoading };
};
