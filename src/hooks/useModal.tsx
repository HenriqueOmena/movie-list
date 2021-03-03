import React, { useState } from "react";

interface ContextModal {
  showModal?: boolean;
  handleModal?: any;
  modalContent?: JSX.Element;
}

const ModalContext = React.createContext<ContextModal>({});

const ModalProvider: React.FC = ({ children }) => {
  let [showModal, setShowModal] = useState(false);
  let [modalContent, setModalContent] = useState();

  let handleModal = (content?: JSX.Element) => {
    setShowModal(!showModal);
    content ?? setModalContent(content);
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
