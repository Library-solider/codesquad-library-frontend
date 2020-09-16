import React from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { DetailWrapper, DetailInner } from "./detailStyle";

import BookInfomation from "./BookInfomation";
import BookDescription from "./BookDescription";
import Loading from "../Loading";

const DB_HOST = "https://backend.librarycodesquad.com/v1";

const DetailBook = () => {
  const history = useHistory();
  const requestUrl = DB_HOST + history.location.pathname;

  const { response, error } = useFetch(requestUrl, null);

  if (error) return <div>{error.message}</div>;
  if (!response) return <Loading />;

  return (
    <DetailWrapper>
      <DetailInner>
        <BookInfomation {...response.data} />
        <BookDescription description={response.data.description} />
      </DetailInner>
    </DetailWrapper>
  );
};

export default DetailBook;
