import React, { useState, useContext } from "react";

import { ThemeContext } from "styled-components";
import { RentalCardWrapper } from "./MyPage.element";
import { Button } from "../../styles/Button";

import ReturnModal from "./ReturnModal";

import { PUT_OPTION } from "../../constants/fetch";

const createReturnAPI = (id) =>
  `https://backend.librarycodesquad.com/v1/books/${id}`;

const RentalCard = ({ title, returnDate, imageUrl, id }) => {
  const { colors } = useContext(ThemeContext);
  const [isRentalModal, setIsRentalModal] = useState(false);

  const onToggleModal = () => setIsRentalModal(!isRentalModal);
  const returnBook = async () => {
    try {
      const response = await fetch(createReturnAPI(id), PUT_OPTION);
      const data = await response.json();

      if (data.status !== true) {
        throw data;
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RentalCardWrapper>
      <img src={imageUrl} alt="" />
      <div className="book-title">{title}</div>
      <div className="return-date">반납일: {returnDate}</div>
      <Button
        fillColor={colors.green_1}
        textColor={colors.white}
        onClick={onToggleModal}
      >
        반납하기
      </Button>
      {isRentalModal && (
        <ReturnModal onCloseModal={onToggleModal} returnBook={returnBook} />
      )}
    </RentalCardWrapper>
  );
};

export default RentalCard;
