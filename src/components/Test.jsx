import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";
const Test = () => {
  return (
    <TestWrapper>
      <SkeletonTheme color="red" highlightColor="#444">
        <Skeleton width="300px" height="300px" count={20} />
      </SkeletonTheme>
    </TestWrapper>
  );
};

const TestWrapper = styled.div`
  display: grid;
  grid-column: 1fr 1fr 1fr 1fr;
`;

export default Test;
