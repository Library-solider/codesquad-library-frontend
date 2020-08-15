import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import querystring from "query-string";

import { SearchForm } from "../../styles/SearchForm";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const history = useHistory();

  const [isToggle, setIsToggle] = useState(false);
  const [keyword, setKeyword] = useState("");

  const parsedSearchQueries = querystring.parse(history.location.search);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory"))
  );

  const updateSearchHistory = (historyRecord, keyword) => {
    if (historyRecord) {
      const newHistory = searchHistory;
      newHistory.unshift(keyword);
      setSearchHistory(newHistory);
    } else {
      setSearchHistory([keyword]);
    }
  };

  const onFocusInput = () => setIsToggle(true);
  const onBlurInput = () => setIsToggle(false);
  const onChangeInput = (e) => setKeyword(e.target.value);

  const onKeyDownInput = (e) => {
    switch (e.key) {
      case "Enter":
        history.push(`/search?q=${keyword}`);
        setIsToggle(false);
        e.target.blur();
        updateSearchHistory(searchHistory, keyword);
        break;
      case "ArrowUp":
        break;
      case "ArrowDown":
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (parsedSearchQueries.q) setKeyword(parsedSearchQueries.q);
  }, [parsedSearchQueries.q]);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="원하는 책의 제목을 검색해 보세요 !"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onKeyDown={onKeyDownInput}
        onChange={onChangeInput}
        value={keyword}
      />
      <button className="search_btn">
        <FiSearch />
      </button>
      {isToggle && <ul className="search_result"></ul>}
    </SearchForm>
  );
};

export default Search;
