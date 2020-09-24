import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { MyPageWrapper, MyPageInner } from "./MyPage.element";

import Loading from "../Loading";
import ErrorPage from "../errorPage/ErrorPage";
import MyProfile from "./MyProfile";
import MyRental from "./MyRental";

import { GET_OPTION } from "../../constants/fetch";

const MOCK_DATA = {
  status: true,
  statusCode: 1,
  statusMessage: "OK",
  data: {
    name: "Sunny92",
    email: "thstkd92@gmail.com",
    avatarUrl: "https://avatars1.githubusercontent.com/u/49144662?v=4",
    role: "USER",
    requested: false,
    rentalBookResponse: [
      {
        title: "(명쾌한 설명과 풍부한 그림으로 배우는) TCP/IP 쉽게 더 쉽게",
        beginDate: "2020-09-01",
        returnDate: "2020-09-15",
      },
    ],
  },
};

const MYPAGE_API = "https://backend.librarycodesquad.com/v1/user/mypage";

const MyPage = () => {
  const { response, error } = useFetch(MYPAGE_API, GET_OPTION);

  if (error) return <ErrorPage status={error.status} />;
  if (!response) return <Loading />;

  return (
    <MyPageWrapper>
      <MyPageInner>
        <MyProfile
          avatarUrl={MOCK_DATA.data.avatarUrl}
          name={MOCK_DATA.data.name}
          email={MOCK_DATA.data.email}
        />
        <MyRental rentalList={MOCK_DATA.data.rentalBookResponse} />
      </MyPageInner>
    </MyPageWrapper>
  );
};

export default MyPage;
