import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { MyPageWrapper, MyPageInner } from "./MyPage.element";

import Loading from "../Loading";
import ErrorPage from "../errorPage/ErrorPage";
import MyProfile from "./MyProfile";
import MyRental from "./MyRental";

import { GET_OPTION } from "../../constants/fetch";

const MYPAGE_API = "https://backend.librarycodesquad.com/v1/users/mypage";

// const MOCK_DATA = {
//   status: true,
//   statusCode: 1,
//   statusMessage: "OK",
//   data: {
//     name: "choichoigang",
//     email: null,
//     avatarUrl: "https://avatars2.githubusercontent.com/u/49897409?v=4",
//     role: "ADMIN",
//     rentalBookResponses: [
//       {
//         id: 37,
//         title: "냉장고를 공짜로 드립니다",
//         author: "남궁성",
//         imageUrl:
//           "http://bimage.interpark.com/goods_image/4/6/6/3/319734663s.jpg",
//         returnDate: "2020-08-30",
//       },
//       {
//         id: 20,
//         title: "거침없이 배우는 커피스크립트 (CoffeScript)",
//         author: "남궁성",
//         imageUrl:
//           "http://bimage.interpark.com/goods_image/5/8/0/7/213565807s.jpg",
//         returnDate: "2020-10-12",
//       },
//       {
//         id: 20,
//         title: "거침없이 배우는 커피스크립트 (CoffeScript)",
//         author: "남궁성",
//         imageUrl:
//           "http://bimage.interpark.com/goods_image/5/8/0/7/213565807s.jpg",
//         returnDate: "2020-10-12",
//       },
//     ],
//   },
// };

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
