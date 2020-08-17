import React from "react";

import { MdClose } from "react-icons/md";
import { HistoryItemWrapper } from "./searchStyle";

const HistoryItem = ({
  historyKeyword,
  removeSearchHistory,
  indexPosition,
  currentPosition,
  updateCurrentPosition,
  moveSearchResult,
}) => {
  const onClickRemoveButton = (e) => {
    e.stopPropagation();
    removeSearchHistory(indexPosition);
  };

  return (
    <HistoryItemWrapper
      isActive={indexPosition === currentPosition}
      onMouseOver={updateCurrentPosition}
    >
      <span onClick={moveSearchResult}>{historyKeyword}</span>
      <button onClick={onClickRemoveButton}>
        <MdClose />
      </button>
    </HistoryItemWrapper>
  );
};

export default HistoryItem;
