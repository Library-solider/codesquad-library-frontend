import { useEffect, useState } from "react";

export const useFetch = (url, dependenceArr) => {
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await fetch(url);
        const initialData = await response.json();
        console.log(initialData);
        setResponse(initialData);
      } catch (error) {
        setError(error);
      }
    };

    initialFetch();
  }, [url, ...dependenceArr]);

  return { response, error };
};
