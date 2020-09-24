import React from "react";
import { NavLink } from "react-router-dom";

import { BookItemWrapper } from "./bookItemStyle";
import image_ready from "../../assets/images/image-ready.png";

const BookItem = ({ id, image, title, author }) => {
  const bookImage = image ? image : image_ready;

  return (
    <BookItemWrapper className="book_item">
      <NavLink to={`/books/${id}`}>
        <img className="book-image" src={bookImage} alt="book cover" />
        <div className="book_title">{title}</div>
        <div className="author">{author}</div>
      </NavLink>
    </BookItemWrapper>
  );
};

export default BookItem;
