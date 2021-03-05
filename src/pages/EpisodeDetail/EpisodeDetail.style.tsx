import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  button {
    align-self: flex-start;
  }

  img {
    width: 80vw;
    max-width: 360px;
  }

  p {
    padding: 40px 10px;
    max-width: 380px;
  }
`;
