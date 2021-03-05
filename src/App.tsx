import React from "react";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";
import { ModalProvider } from "hooks/useModal";
import { Modal } from "components/Modal";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Container>
          <Routes />
          <Modal />
        </Container>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
