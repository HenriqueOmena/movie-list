import React, { useState } from "react";
// import useModal from "./useModal";
import { Modal } from "components/Modal";

interface ContextModal {
  showModal?: boolean;
  handleModal?: any;
  modalContent?: JSX.Element;
}

const ModalContext = React.createContext<ContextModal>({});

const ModalProvider: React.FC = ({ children }) => {
  let [showModal, setShowModal] = useState(false);
  let [modalContent, setModalContent] = useState(<div>asd</div>);

  let handleModal = (content?: JSX.Element) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalContent,
        showModal,
        handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
