import { ModalContext } from "hooks/useModal";
import React, { useRef, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { Background, ModalWrapper, ModalContent, CloseModalButton } from "./Modal.style";
/**
 * A dump element to render a modal
 * @returns JSX.Element
 */
const Modal: React.FC = () => {
  let { modalContent, handleModal, showModal } = useContext(ModalContext);

  const modalRef = useRef<any>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleModal();
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
              <ModalContent>
                <button onClick={() => handleModal()}>Back</button>
                {modalContent}
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
