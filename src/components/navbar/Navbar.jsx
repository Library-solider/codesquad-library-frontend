import React, { useContext, useEffect, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";

import styled, { ThemeContext } from "styled-components";
import codesquad_logo from "../../assets/images/codesquad-logo.png";
import { Button } from "../../styles/Button";

import Search from "../search/Search";

import { GET_OPTION } from "../../constants/fetch";

const OAUTH_LINK =
  "http://backend.librarycodesquad.com/oauth2/authorization/github";
const PROFILE_URL = "http://backend.librarycodesquad.com/v1/users/profile";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch(PROFILE_URL, GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setIsLogin(true);
          setUserInfo(data.data);
        }
      });
  }, []);

  return (
    <NavbarWrapper>
      <Logo href="/">
        <img src={codesquad_logo} alt="codesquad logo" />
      </Logo>
      <Search />

      {isLogin ? (
        <div className="user-info">
          <img src={userInfo.avatarUrl} alt="user image" />
        </div>
      ) : (
        <LoginButton
          fillColor={themeContext.colors.green_1}
          textColor={themeContext.colors.white}
        >
          <a href={OAUTH_LINK}>Login</a>
        </LoginButton>
      )}
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

  .user-info {
    img {
      width: 4.5rem;
      border-radius: 50%;
    }
  }
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
