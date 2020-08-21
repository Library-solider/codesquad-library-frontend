import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Skeleton = () => {
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading("Loading done . . .");
    }, 3000);
  }, []);

  return (
    <TestWrapper>
      <div className="skeleton-screen">{isLoading}</div>
    </TestWrapper>
  );
};

const TestWrapper = styled.div`
  margin-top: 100px;

  .skeleton-screen:empty {
    margin: auto;
    width: 100%;
    height: 500px;

    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      /* highlight */
        radial-gradient(circle 50px at 50px 50px, lightgray 100%, transparent 0),
      linear-gradient(lightgray 20px, transparent 0),
      linear-gradient(lightgray 20px, transparent 0),
      linear-gradient(lightgray 20px, transparent 0),
      linear-gradient(lightgray 20px, transparent 0);

    background-repeat: repeat-y;

    background-size: 50px 200px, /* highlight */ 100px 200px, 150px 200px,
      350px 200px, 300px 200px, 250px 200px;

    background-position: 120px 0, /* highlight */ 0 0, 120px 0, 120px 40px,
      120px 80px, 120px 120px;

    animation: shine 1s infinite;
  }

  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0, 120px 0,
        120px 40px, 120px 80px, 120px 120px;
    }
  }
`;

export default Skeleton;
