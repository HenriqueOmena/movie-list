import { device } from "components/breakpoints";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  min-width: 70vw;
  max-width: 80vw;
  @media ${device.laptop} {
    min-width: 50vw;
    max-width: 87vw;
  }

  @media ${device.desktop} {
    border: solid 3px green;
    min-width: 30vw;
    max-width: 40vw;
  }

  height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ModalContent = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.8;

  button {
    margin-left: 5vw;
    margin-top: 23px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`;
