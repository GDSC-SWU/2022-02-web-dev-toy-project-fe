import { useState } from "react";
import ModalBasic from "./ModalBasic";
import styled from "styled-components";

// 모달을 노출하는 페이지
function Modal() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const ModalBg = styled.div`
    color: #afafaf;
    width: 10.8rem;
    border-radius: 32px;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 0.75rem;
    border: 1px solid #c9c9c9;
    padding: 0.5rem 2rem;
    text-align: center;
  `;

  return (
    <div>
      <button onClick={showModal}>
        <ModalBg>로그인에 어려움이 있나요?</ModalBg>
      </button>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Modal;
