import React, { useContext, useEffect, useState } from "react";
import decode from "jwt-decode";

import styled, { ThemeContext } from "styled-components";
import codesquad_logo from "../../assets/images/codesquad-logo.png";
import { Button } from "../../styles/Button";

import Search from "../search/Search";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch("http://backend.librarycodesquad.com/v1/users/profile")
      .then((response) => response.json())
      .then((fetchData) => setUserName(fetchData.data.name));
  }, []);

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
      >
        {userName && userName}
      </div>
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
