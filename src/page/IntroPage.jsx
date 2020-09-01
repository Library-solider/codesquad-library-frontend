import React, { useContext } from "react";

import { ThemeContext } from "styled-components";

import Introduce from "../components/introduce/Introduce";
import IntroBooks from "../components/introBooks/IntroBooks";

const IntroPage = () => {
  return (
    <>
      <Introduce />
      <IntroBooks />
    </>
  );
};

export default IntroPage;
