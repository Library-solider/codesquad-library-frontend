import React from "react";
import { useFetch } from "../../hooks/useFetch";

import styled from "styled-components";
import { Loading } from "../../styles/Loading";

import BookCarousel from "./BookCarousel";
import ErrorPage from "../errorPage/ErrorPage";

const MAIN_API = "http://backend.librarycodesquad.com/v1/main";

const IntroBooks = () => {
  const { response } = useFetch(MAIN_API, null);

  if (!response)
    return (
      <Loading>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading gif"
        />
      </Loading>
    );
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
