import React, { useState } from "react";

type handleModalParam = JSX.Element | undefined;

interface ContextModal {
  showModal: boolean;
  handleModal: (content?: handleModalParam) => void;
  modalContent?: JSX.Element;
}

const ModalContext = React.createContext<ContextModal>({ handleModal: () => {}, showModal: false });

const ModalProvider: React.FC = ({ children }) => {
  let [showModal, setShowModal] = useState(false);
  let [modalContent, setModalContent] = useState(<div>No Content</div>);

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
