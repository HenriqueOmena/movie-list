import React from "react";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";
import { ModalProvider } from "hooks/useModal";
import { Modal } from "components/Modal";
import Provider from "store/config/provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <ModalProvider>
          <Container>
            <Routes />
            <Modal />
          </Container>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
