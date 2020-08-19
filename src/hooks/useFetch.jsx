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
  }, [url, ...dependenceArr]);

  return { response, error };
};
