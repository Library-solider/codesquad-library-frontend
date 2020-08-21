import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BookItemWrapper } from "./bookItemStyle";

const BookItem = ({ id, image, title, author }) => {
  return (
    <BookItemWrapper className="book_item">
      <NavLink to={`/books/${id}`}>
        <img className="book-image" src={image} alt="book cover" />
        <div className="book_title">{title}</div>
        <div className="author">{author}</div>
      </NavLink>
    </BookItemWrapper>
  );
};

export default BookItem;
