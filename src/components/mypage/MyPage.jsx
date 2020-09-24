import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { MyPageWrapper, MyPageInner } from "./MyPage.element";

import Loading from "../Loading";
import ErrorPage from "../errorPage/ErrorPage";
import MyProfile from "./MyProfile";
import MyRental from "./MyRental";

import { GET_OPTION } from "../../constants/fetch";

const MYPAGE_API = "https://backend.librarycodesquad.com/v1/user/mypage";

const MyPage = () => {
  const { response, error } = useFetch(MYPAGE_API, GET_OPTION);

  if (error) return <ErrorPage status={error.status} />;
  if (!response) return <Loading />;

  const { name, email, avatarUrl, rentalBookResponse } = response;

  return (
    <MyPageWrapper>
      <MyPageInner>
        <MyProfile avatarUrl={avatarUrl} name={name} email={email} />
        <MyRental rentalList={rentalBookResponse} />
      </MyPageInner>
    </MyPageWrapper>
  );
};

export default MyPage;
