import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color:#282c34;
    color: white;
    margin: 0;
    padding: 0;

    ul {
      list-style: none;
      padding: 0;
    }

    button {

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
