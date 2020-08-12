import React from "react";
import { BookDescriptionWrapper } from "./detailStyle";

const BookDescription = ({ description }) => {
  return (
    <BookDescriptionWrapper>
      <h3 className="title">책소개</h3>
      <div className="description">{description}</div>
    </BookDescriptionWrapper>
  );
};

export default BookDescription;
