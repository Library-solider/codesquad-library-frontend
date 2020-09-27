import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { ReturnModalInner } from "./MyPage.element";
import { Button } from "../../styles/Button";

import Modal from "../modal/Modal";

const ReturnModal = ({ onCloseModal, returnBook }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Modal>
      <ReturnModalInner>
        <div>정말로 반납하시겠습니까?</div>
        <div className="modal-buttons">
          <Button
            fillColor={colors.green_1}
            textColor={colors.white}
            onClick={returnBook}
          >
            반납
          </Button>
          <Button
            fillColor={colors.red_1}
            textColor={colors.white}
            onClick={onCloseModal}
          >
            취소
          </Button>
        </div>
      </ReturnModalInner>
    </Modal>
  );
};

export default ReturnModal;
