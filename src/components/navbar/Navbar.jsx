import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled, { ThemeContext } from "styled-components";
import codesquad_logo from "../../assets/images/codesquad-logo.png";
import { Button } from "../../styles/Button";

import Search from "../search/Search";

import { GET_OPTION } from "../../constants/fetch";

const OAUTH_LINK =
  "https://backend.librarycodesquad.com/oauth2/authorization/github";
const PROFILE_URL = "https://backend.librarycodesquad.com/v1/users/profile";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch(PROFILE_URL, GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUserInfo(data.data);
          setIsLogin(true);
        }
      });
  }, []);

  return (
    <NavbarWrapper>
      <Link to="/" className="logo">
        <img src={codesquad_logo} alt="codesquad logo" />
      </Link>
      <Search />

      {isLogin ? (
        <div className="user-info">
          <img src={userInfo.avatarUrl} alt="user logo" />
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
      width: 2.5rem;
      border-radius: 50%;
    }
  }

  .logo {
    cursor: pointer;
    img {
      width: 4.5rem;
      height: 3.5rem;
    }
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const LoginButton = styled(Button)`
  order: 1;
`;

export default Navbar;
