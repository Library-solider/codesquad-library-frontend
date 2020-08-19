import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useIsMobile } from "../../hooks/useMediaQuery";
import querystring from "query-string";

import { ThemeContext } from "styled-components";
import { FcSearch } from "react-icons/fc";
import { Loading } from "../../styles/Loading";
import {
  SearchBookWrapper,
  SearchBookInner,
  NoneResultWrapper,
} from "./searchBookStyle";

import BookItem from "../bookItem/BookItem";
import Pagination from "../pagination/Pagination";
import Category from "../category/Category";
import ErrorPage from "../errorPage/ErrorPage";

import {
  PER_PAGE,
  SHOW_PAGE_COUNT_DESKTOP,
  SHOW_PAGE_COUNT_MOBILE,
  MIN_PAGINATION,
} from "../../constants/searchBook";

import { createRequestUrl } from "../../utils/url";
import { useFetch } from "../../hooks/useFetch";

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

  const { response } = useFetch(requestUrl, [
    parsedSearchQueries.page,
    parsedSearchQueries.q,
  ]);
  const themeContext = useContext(ThemeContext);
  const { colors } = themeContext;

  const isMobile = useIsMobile()
    ? SHOW_PAGE_COUNT_MOBILE
    : SHOW_PAGE_COUNT_DESKTOP;

  if (!response)
    return (
      <Loading>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt=""
        />
      </Loading>
    );

  if (!response.statusCode) return <ErrorPage status={response.status} />;

  const { bookCount, books, categoryId } = response.data;
  window.scrollTo(0, 0);

  return (
    <>
      <Category
        fillColor={colors.gray_1}
        fontColor={colors.white}
        isActive={categoryId && categoryId}
      />
      {!books.length ? (
        <NoneResultWrapper>
          <FcSearch />
          <h1>검색 결과가 없습니다.</h1>
        </NoneResultWrapper>
      ) : (
        <>
          <SearchBookWrapper>
            <SearchBookInner>
              {books.map((el) => (
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
            totalItem={bookCount}
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
