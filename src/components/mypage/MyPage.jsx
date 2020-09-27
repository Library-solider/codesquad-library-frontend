import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { MyPageWrapper, MyPageInner } from "./MyPage.element";

import user_image from "../../assets/images/sample-profile.jpeg";
import sample_book_image from "../../assets/images/sample-2.jpg";

import Loading from "../Loading";
import ErrorPage from "../errorPage/ErrorPage";
import MyProfile from "./MyProfile";
import MyRental from "./MyRental";

import { GET_OPTION } from "../../constants/fetch";

// const MOCK_DATA = {
//   status: true,
//   statusCode: 1,
//   statusMessage: "OK",
//   data: {
//     name: "Sunny92",
//     email: "thstkd92@gmail.com",
//     avatarUrl: "https://avatars1.githubusercontent.com/u/49144662?v=4",
//     role: "USER",
//     requested: false,
//     rentalBookResponse: [
//       {
//         title: "(명쾌한 설명과 풍부한 그림으로 배우는) TCP/IP 쉽게 더 쉽게",
//         imageUrl: sample_book_image,
//         beginDate: "2020-09-01",
//         returnDate: "2020-09-15",
//       },
//       {
//         title: "(명쾌한 설명과 풍부한 그림으로 배우는) TCP/IP 쉽게 더 쉽게",
//         imageUrl: sample_book_image,
//         beginDate: "2020-09-01",
//         returnDate: "2020-09-15",
//       },
//       {
//         title: "(명쾌한 설명과 풍부한 그림으로 배우는) TCP/IP 쉽게 더 쉽게",
//         imageUrl: sample_book_image,
//         beginDate: "2020-09-01",
//         returnDate: "2020-09-15",
//       },
//     ],
//   },
// };

const MYPAGE_API = "https://backend.librarycodesquad.com/v1/users/mypage";

const MyPage = () => {
  const { response, error } = useFetch(MYPAGE_API, GET_OPTION);

  if (error) return <ErrorPage status={error.status} />;
  if (!response) return <Loading />;

  const { name, email, avatarUrl, rentalBookResponses } = response.data;

  return (
    <MyPageWrapper>
      <MyPageInner>
        <MyProfile avatarUrl={avatarUrl} name={name} email={email} />
        <MyRental rentalList={rentalBookResponses} />
      </MyPageInner>
    </MyPageWrapper>
  );
};

export default MyPage;
