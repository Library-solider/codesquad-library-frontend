import React from "react";
import styled from "styled-components";
import { FcDeleteRow } from "react-icons/fc";

const ErrorPage = ({ status }) => {
  return (
    <NotFoundPageWrapper>
      {status === 404 && (
        <>
          <FcDeleteRow />
          <h1>
            요청하신 페이지가 없습니다.
            <br />
            입력하신 주소를 확인해 주세요.
          </h1>
          <a href="/">홈으로 돌아가기</a>
        </>
      )}
    </NotFoundPageWrapper>
  );
};

const NotFoundPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  svg {
    font-size: 10rem;
    margin: ${({ theme: { margins } }) => margins.base};
  }

  h1 {
    text-align: center;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.base};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
    color: ${({ theme: { colors } }) => colors.gray_2};
    font-weight: bold;
  }

  a {
    padding: ${({ theme: { paddings } }) => paddings.base};
    margin: ${({ theme: { margins } }) => margins.base};
    border-radius: ${({ theme: { radius } }) => radius.xSmall};
    background-color: ${({ theme: { colors } }) => colors.green_1};
  }
`;

export default ErrorPage;
