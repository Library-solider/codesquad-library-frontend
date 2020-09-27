import React from "react";

import { MyRentalWrapper, RentalCardList } from "./MyPage.element";

import RentalCard from "./RentalCard";

const MyRental = ({ rentalList }) => {
  return (
    <MyRentalWrapper>
      <h1 className="my-rental-title">대여 리스트</h1>
      <RentalCardList>
        {rentalList.length ? (
          <>
            {rentalList.map((el) => (
              <RentalCard {...el} />
            ))}
          </>
        ) : (
          <div className="none-rental-list">대여한 책이 없습니다 🧐</div>
        )}
      </RentalCardList>
    </MyRentalWrapper>
  );
};

export default MyRental;
