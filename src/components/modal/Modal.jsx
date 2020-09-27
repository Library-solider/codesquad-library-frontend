import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <DimmedLayer />
      <ModalWrapper>{children}</ModalWrapper>
    </>,
    document.getElementById("root")
  );
};

const DimmedLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: ${({ theme: { colors } }) => colors.black};
`;

const ModalWrapper = styled.div`
  z-index: 4;
  position: fixed;
  box-sizing: border-box;
  border-radius: 4px;
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: ${({ theme: { paddings } }) => paddings.xl};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};

  @media ${({ theme: { device } }) => device.tabletL} {
    width: 60%;
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 90%;
  }
`;

export default Modal;
