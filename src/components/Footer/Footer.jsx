import React from "react";
import styled from "styled-components";

const COPY_RIGHT = "Copyright © 2020 codesquad library. All rights reserved";
const ADMIN_EMAIL = "jhchoi1115@gmail.com";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>{COPY_RIGHT}</div>
      <a href="mailto:jhchoi1115@gmail.com">{ADMIN_EMAIL}</a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.8rem;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.gray_1};
  padding: ${({ theme: { paddings } }) => paddings.xxxl};
`;

export default Footer;
