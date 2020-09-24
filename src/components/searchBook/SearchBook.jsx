import React from "react";
import { useHistory } from "react-router-dom";
import querystring from "query-string";
import { useIsMobile } from "../../hooks/useMediaQuery";

import { SearchBookWrapper, SearchBookInner } from "./searchBookStyle";

import BookItem from "../bookItem/BookItem";
import Pagination from "../pagination/Pagination";
import ErrorPage from "../errorPage/ErrorPage";

import Loading from "../Loading";
import CatalogMagic from "../catalogMagic/CatalogMagic";

import {
  PER_PAGE,
  SHOW_PAGE_COUNT_DESKTOP,
  SHOW_PAGE_COUNT_MOBILE,
  MIN_PAGINATION,
} from "../../constants/searchBook";

import { createRequestUrl } from "../../utils/url";
import { useBooksFetch } from "../../hooks/useFetch";

const CATALOG_COLUMN_MOBILE = 1;
const CATALOG_COLUMN_DESKTOP = 5;

const SearchBook = () => {
  const history = useHistory();

  const requestUrl = createRequestUrl(history.location);
  const parsedSearchQueries = querystring.parse(history.location.search);
  const currentPage = parsedSearchQueries.page
    ? parsedSearchQueries.page
    : MIN_PAGINATION;

  const { response, error, isLoading } = useBooksFetch(requestUrl, null);

  const isMobile = useIsMobile();

  if (error) return <ErrorPage status={error.status} />;
  if (!response) return <Loading />;

  window.scrollTo(0, 0);

  return (
    <>
      {!isLoading ? (
        <SearchBookWrapper>
          <CatalogMagic
            column={isMobile ? CATALOG_COLUMN_MOBILE : CATALOG_COLUMN_DESKTOP}
          />
        </SearchBookWrapper>
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
            showPageCount={
              isMobile ? SHOW_PAGE_COUNT_MOBILE : SHOW_PAGE_COUNT_DESKTOP
            }
            currentPage={Math.max(currentPage, 1)}
          />
        </>
      )}
    </>
  );
};

export default SearchBook;
