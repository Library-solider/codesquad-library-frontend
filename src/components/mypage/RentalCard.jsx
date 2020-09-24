import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { RentalCardWrapper } from "./MyPage.element";

import { Button } from "../../styles/Button";

const RentalCard = ({ title, returnDate }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <RentalCardWrapper>
      <div className="rental-info">
        <div className="book-title">{title}</div>
        <div className="return-date">반납일: {returnDate}</div>
      </div>
      <Button fillColor={colors.blue_2} textColor={colors.white}>
        반납하기
      </Button>
    </RentalCardWrapper>
  );
};

export default RentalCard;
