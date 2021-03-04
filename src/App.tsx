import React from "react";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";
import Provider from "store/config/provider";
import { ModalProvider } from "hooks/useModal";
import { Modal } from "components/Modal";

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
