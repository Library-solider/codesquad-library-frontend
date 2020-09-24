import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { MyProfileWrapper } from "./MyPage.element";
import { Button } from "../../styles/Button";

const MyProfile = ({ name, email, avatarUrl }) => {
  const { colors } = useContext(ThemeContext);
  console.log(colors);

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
        <Button fillColor={colors.red_1} textColor={colors.white}>
          로그아웃
        </Button>
      </div>
    </MyProfileWrapper>
  );
};

export default MyProfile;
