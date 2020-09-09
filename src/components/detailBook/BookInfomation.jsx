import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { BookInfomationWrapper, IsRental } from "./detailStyle";

import { Button } from "../../styles/Button";
import Modal from "../modal/Modal";

const BookInfomation = (props) => {
  const {
    title,
    imageUrl,
    publicationDate,
    publisher,
    author,
    available,
    isbn,
  } = props;

  const themeContext = useContext(ThemeContext);
  const [rentalClosed, setRentalClosed] = useState(false);
  const { colors } = themeContext;

  const onClickRentalBtn = () => setRentalClosed(!rentalClosed);

  return (
    <BookInfomationWrapper>
      <div className="book_image rental">
        <img src={imageUrl} alt={title} />
        <RentalButton
          onClick={onClickRentalBtn}
          fillColor={colors.green_1}
          textColor={colors.white}
          disabled={!available}
        >
          대여하기
        </RentalButton>
        {rentalClosed && <Modal onCloseModal={onClickRentalBtn} />}
      </div>
      <div className="book_detail_info">
        <h3 className="title">{title}</h3>
        <div className="author">저자:{author}</div>
        <div className="publisher">출판:{publisher}</div>
        <div className="publicationDate">출판일:{publicationDate}</div>
        <div className="standard_number">표준번호:{isbn}</div>
        <IsRental fontColor={available ? colors.green_1 : colors.red}>
          {available ? "대여가능" : "대여중"}
        </IsRental>
      </div>
    </BookInfomationWrapper>
  );
};

const RentalButton = styled(Button)`
  width: 100%;
  opacity: ${(props) => props.disabled && "0.7"};
`;

export default BookInfomation;
