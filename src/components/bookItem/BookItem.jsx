import React from "react";
import { NavLink } from "react-router-dom";

import { BookItemWrapper, NoneImage } from "./bookItemStyle";

const BookItem = ({ id, image, title, author }) => {
  return (
    <BookItemWrapper className="book_item">
      <NavLink to={`/books/${id}`}>
        {image ? (
          <img className="book-image" src={image} alt="book cover" />
        ) : (
          <NoneImage>이미지 준비중🥺</NoneImage>
        )}

        <div className="book_title">{title}</div>
        <div className="author">{author}</div>
      </NavLink>
    </BookItemWrapper>
  );
};

export default BookItem;
