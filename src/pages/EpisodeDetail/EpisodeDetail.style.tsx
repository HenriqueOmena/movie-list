import styled from "styled-components";

export const Container = styled.div`
  border: solid 1px green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  button {
    align-self: flex-start;
  }

  img {
    border: solid 3px blue;
    width: 80vw;
    max-width: 360px;
  }
`;
