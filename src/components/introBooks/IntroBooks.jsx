import React from "react";
import { useFetch } from "../../hooks/useFetch";

import styled from "styled-components";

import BookCarousel from "./BookCarousel";
import ErrorPage from "../errorPage/ErrorPage";
import Loading from "../Loading";

const MAIN_API = "https://backend.librarycodesquad.com/v1/main";

const IntroBooks = () => {
  const { response, error } = useFetch(MAIN_API, null);

  if (error) return <ErrorPage status={error.status} />;
  if (!response) return <Loading />;

  return (
    <IntroBooksWrapper>
      {response &&
        response.data.map((el) => {
          return <BookCarousel key={el.categoryId} {...el} />;
        })}
    </IntroBooksWrapper>
  );
};

const IntroBooksWrapper = styled.div`
  width: 100%;

  :empty {
    height: 100vh;
  }
`;

export default IntroBooks;
