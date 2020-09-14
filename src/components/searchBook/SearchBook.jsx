import React from "react";
import { useHistory } from "react-router-dom";
import { useIsMobile } from "../../hooks/useMediaQuery";
import querystring from "query-string";

import {
  SearchBookWrapper,
  SearchBookInner,
  ItemPlaceholder,
} from "./searchBookStyle";

import BookItem from "../bookItem/BookItem";
import Pagination from "../pagination/Pagination";
import ErrorPage from "../errorPage/ErrorPage";

import Loading from "../Loading";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  PER_PAGE,
  SHOW_PAGE_COUNT_DESKTOP,
  SHOW_PAGE_COUNT_MOBILE,
  MIN_PAGINATION,
} from "../../constants/searchBook";

import { createRequestUrl } from "../../utils/url";
import { useBooksFetch } from "../../hooks/useFetch";

const SearchBook = () => {
  // hook
  const history = useHistory();

  // Query String
  const requestUrl = createRequestUrl(history.location);
  const parsedSearchQueries = querystring.parse(history.location.search);
  const currentPage = parsedSearchQueries.page
    ? parsedSearchQueries.page
    : MIN_PAGINATION;

  // State
  const { response, error, isLoading } = useBooksFetch(requestUrl, null);

  const isMobile = useIsMobile()
    ? SHOW_PAGE_COUNT_MOBILE
    : SHOW_PAGE_COUNT_DESKTOP;

  if (error) return <ErrorPage status={response.status} />;
  if (!response) return <Loading />;

  window.scrollTo(0, 0);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBookWrapper>
            <SearchBookInner>
              {response.data.books.map((el) => (
                <BookItem
                  key={el.id}
                  id={el.id}
                  image={el.imageUrl}
                  title={el.title}
                  author={el.author}
                />
              ))}
            </SearchBookInner>
          </SearchBookWrapper>
          <Pagination
            totalItem={response.data.bookCount}
            itemPerPage={PER_PAGE}
            showPageCount={isMobile}
            currentPage={Math.max(currentPage, 1)}
          />
        </>
      )}
    </>
  );
};

export default SearchBook;
