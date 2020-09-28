import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ThemeContext } from "styled-components";
import { MyProfileWrapper } from "./MyPage.element";
import { Button } from "../../styles/Button";

import { deleteCookie } from "../../utils/cookie";
import { JSESSION_KEY } from "../../constants/cookie";

const MyProfile = ({ name, email, avatarUrl }) => {
  const history = useHistory();
  const { colors } = useContext(ThemeContext);

  const onClickLogout = () => {
    deleteCookie(JSESSION_KEY);
    history.push("/");
  };

  return (
    <MyProfileWrapper>
      <div className="myprofile-left">
        <img src={avatarUrl} alt="User Profile" />
        <div>
          <p className="user-name">{name}</p>
          <p className="user-email">{email}</p>
        </div>
      </div>
      <div className="myprofile-right">
        <Button
          fillColor={colors.red_1}
          textColor={colors.white}
          onClick={onClickLogout}
        >
          로그아웃
        </Button>
      </div>
    </MyProfileWrapper>
  );
};

export default MyProfile;
