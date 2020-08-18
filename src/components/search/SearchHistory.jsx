import React from "react";

import HistoryItem from "./HistoryItem";

import { SearchHistoryWrapper } from "./searchStyle";

const NONE_HISTORY = "최근 검색어 내역이 없습니다.";

const SearchHistory = ({
  searchHistory,
  currentPosition,
  moveSearchResult,
  clearSearchHistory,
  removeSearchHistory,
  updateCurrentPosition,
}) => {
  return (
    <SearchHistoryWrapper>
      <li className="recent_search">최근 검색어</li>
      {searchHistory.length ? (
        searchHistory.map((el, idx) => (
          <HistoryItem
            key={idx}
            historyKeyword={el}
            indexPosition={idx}
            currentPosition={currentPosition}
            removeSearchHistory={removeSearchHistory}
            updateCurrentPosition={updateCurrentPosition.bind(null, idx)}
            moveSearchResult={moveSearchResult.bind(null, el)}
          />
        ))
      ) : (
        <li className="none_history">{NONE_HISTORY}</li>
      )}
      <li className="clear_history">
        <button onClick={clearSearchHistory}>전체 삭제</button>
      </li>
    </SearchHistoryWrapper>
  );
};

export default SearchHistory;
