import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import querystring from "query-string";

export const useFetch = (url, option) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await fetch(url, option);
        const initialData = await response.json();
        if (initialData.status !== true) {
          throw initialData;
        } else {
          setResponse(initialData);
        }
      } catch (error) {
        setError(error);
      }
    };

    initialFetch();
  }, [url, option]);

  return { response, error };
};

export const useBooksFetch = (url, options) => {
  const history = useHistory();
  const dependence = JSON.stringify(querystring.parse(history.location.search));

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(false);
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        if (json.status !== true) {
          throw json;
        } else {
          setResponse(json);
          setIsLoading(true);
        }
      } catch (error) {
        setIsLoading(true);
        setError(error);
      }
    };
    fetchData();
  }, [dependence, url, options]);

  return { response, error, isLoading };
};
