import React from "react";
import { useFetch } from "../../hooks/useFetch";

import styled from "styled-components";

import BookCarousel from "./BookCarousel";
import ErrorPage from "../errorPage/ErrorPage";
import Loading from "../Loading";

const MAIN_API = "https://backend.librarycodesquad.com/v1/main";

const IntroBooks = () => {
  const { response } = useFetch(MAIN_API, null);

  if (!response) return <Loading />;
  if (!response.statusCode) return <ErrorPage status={response.status} />;

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
