import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import styled, { ThemeContext } from "styled-components";
import codesquad_logo from "../../assets/images/codesquad-logo.png";
import { Button } from "../../styles/Button";

import Search from "../search/Search";

import { GET_OPTION } from "../../constants/fetch";

const PROFILE_URL = "http://backend.librarycodesquad.com/v1/users/profile";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(false);

  const { response, error } = useFetch(PROFILE_URL, GET_OPTION);

  useEffect(() => {}, []);

  return (
    <NavbarWrapper>
      <Logo href="/">
        <img src={codesquad_logo} alt="codesquad logo" />
      </Logo>
      <Search />

      <div
        style={{
          color: "white",
        }}
      ></div>
      <LoginButton
        fillColor={themeContext.colors.green_1}
        textColor={themeContext.colors.white}
      >
        <a
          href={
            "http://backend.librarycodesquad.com/oauth2/authorization/github"
          }
        >
          Login
        </a>
      </LoginButton>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: ${({ theme }) => theme.paddings.xl};
  font-size: ${({ theme }) => theme.fontSizes.base};
  background-color: ${({ theme: { colors } }) => colors.gray_1};
`;

const LoginButton = styled(Button)`
  order: 1;
`;

const Logo = styled.a`
  cursor: pointer;
  img {
    width: 4.5rem;
    height: 3.5rem;
  }
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export default Navbar;
