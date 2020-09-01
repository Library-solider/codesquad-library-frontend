import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <div className="in"></div>
      </LoadingWrapper>
      <LoadingEmpty></LoadingEmpty>
    </>
  );
};

const LoadingWrapper = styled.div`
  height: 5px;
  width: 100%;

  .in {
    animation: fill 1s linear 1;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.blue_2};
  }

  .loading_empty {
    height: 100vh;
    width: 100%;
  }

  @keyframes fill {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const LoadingEmpty = styled.div`
  :empty {
    height: 100vh;
  }
`;

export default Loading;
