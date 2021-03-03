import { ModalContext } from "hooks/useModal";
import React, { useRef, useEffect, useCallback, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { ModalProps } from "./Modal.interface";
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from "./Modal.style";

const Modal: React.FC = ({ children }) => {
  let { modalContent, handleModal, showModal } = useContext(ModalContext);

  console.log("showModal inside modal", showModal);
  const modalRef = useRef<any>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalImg src={undefined} alt="camera" />
              <ModalContent>
                {modalContent}
                <button onClick={() => handleModal()}>Back</button>
              </ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={() => handleModal()} />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Modal;
