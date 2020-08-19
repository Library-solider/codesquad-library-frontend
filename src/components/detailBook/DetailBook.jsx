import React from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { DetailWrapper, DetailInner } from "./detailStyle";
import { Loading } from "../../styles/Loading";

import BookInfomation from "./BookInfomation";
import BookDescription from "./BookDescription";

const DB_HOST = "http://3.34.7.107/v1";

const DetailBook = () => {
  const history = useHistory();
  const requestUrl = DB_HOST + history.location.pathname;
  const { response, error } = useFetch(requestUrl, []);

  if (!response)
    return (
      <Loading>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt=""
        />
      </Loading>
    );
  if (error) return <div>{error.message}</div>;

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
