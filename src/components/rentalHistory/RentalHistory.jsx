import React from "react";
import { RentalHistoryWrapper, RentalHistoryInner } from "./rentalHistoryStyle";

import BookItem from "../bookItem/BookItem";

const RentalHistory = () => {
  return (
    <RentalHistoryWrapper>
      <RentalHistoryInner></RentalHistoryInner>
    </RentalHistoryWrapper>
  );
};

export default RentalHistory;
