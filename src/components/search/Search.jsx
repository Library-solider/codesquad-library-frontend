import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import querystring from "query-string";

import SearchHistory from "./SearchHistory";

import { SearchForm } from "./searchStyle";
import { FiSearch } from "react-icons/fi";

import { LOCALSTORAGE_KEYS } from "../../constants/localStorage";

const HISTORY_FIRST_INDEX = 0;
const HISTORY_LAST_INDEX = 4;

const Search = () => {
  const history = useHistory();
  const toggleContainer = useRef();
  const [isToggle, setIsToggle] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [historyPosition, setHistoryPosition] = useState(null);
  const [searchHistory, updateSearchHistory] = useState(() => {
    const history = localStorage.getItem(LOCALSTORAGE_KEYS.SEARCH_HISTORY);

    if (history) {
      return JSON.parse(history);
    } else {
      return [];
    }
  });
  const parsedSearchQueries = querystring.parse(history.location.search);

  // localStorage Event
  const clearSearchHistory = () => updateSearchHistory([]);
  const addSearchHistory = (item) => {
    const newSearchHistory = [...new Set([item, ...searchHistory])].slice(0, 5);
    updateSearchHistory(newSearchHistory);
  };
  const removeSearchHistory = (index) => {
    updateSearchHistory([...searchHistory].filter((_, idx) => idx !== index));
  };

  // Input Event
  const onFocusInput = () => setIsToggle(true);
  const onChangeInput = (e) => setKeyword(e.target.value);

  // key press Event
  const moveSearchResult = (keyword) => {
    history.push(`/search?q=${keyword}`);
    setIsToggle(false);
    setHistoryPosition(null);
    addSearchHistory(keyword);
  };
  const onKeyDownInput = (e) => {
    switch (e.key) {
      case "Enter":
        if (keyword) {
          moveSearchResult(keyword);
          e.target.blur();
        }
        break;
      case "ArrowUp":
        if (historyPosition === null && searchHistory.length) {
          setHistoryPosition(searchHistory.length - 1);
        } else if (historyPosition === HISTORY_FIRST_INDEX) {
          setHistoryPosition(null);
        } else {
          setHistoryPosition(historyPosition - 1);
        }
        break;
      case "ArrowDown":
        if (historyPosition === null && searchHistory.length) {
          setHistoryPosition(HISTORY_FIRST_INDEX);
        } else if (historyPosition === HISTORY_LAST_INDEX) {
          setHistoryPosition(null);
        } else {
          setHistoryPosition(historyPosition + 1);
        }
        break;
      default:
        return;
    }
  };

  // outSide Click Pattern
  const onBlurSearchHistory = (e) => {
    if (isToggle && !toggleContainer.current.contains(e.target))
      setIsToggle(false);
  };

  useEffect(() => {
    if (historyPosition === null) {
      setKeyword("");
    } else {
      setKeyword(searchHistory[historyPosition]);
    }
  }, [historyPosition]);

  useEffect(() => {
    setKeyword(parsedSearchQueries.q);
  }, [parsedSearchQueries.q]);

  useEffect(() => {
    localStorage.setItem(
      LOCALSTORAGE_KEYS.SEARCH_HISTORY,
      JSON.stringify(searchHistory)
    );
  }, [searchHistory]);

  useEffect(() => {
    window.addEventListener("click", onBlurSearchHistory);

    return () => {
      window.removeEventListener("click", onBlurSearchHistory);
    };
  });

  return (
    <SearchForm ref={toggleContainer}>
      <input
        type="text"
        placeholder="원하는 책의 제목을 검색해 보세요 !"
        onFocus={onFocusInput}
        onKeyDown={onKeyDownInput}
        onChange={onChangeInput}
        value={keyword}
      />
      <button className="search_btn">
        <FiSearch />
      </button>
      {isToggle && (
        <SearchHistory
          searchHistory={searchHistory}
          currentPosition={historyPosition}
          moveSearchResult={moveSearchResult}
          clearSearchHistory={clearSearchHistory}
          removeSearchHistory={removeSearchHistory}
          updateCurrentPosition={setHistoryPosition}
        />
      )}
    </SearchForm>
  );
};

export default Search;
