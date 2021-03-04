import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color:#282c34;
    color: white;
    margin: 0;
    padding: 0;
     a {
      &:link,
      &:active ,
      &:visited {
         color: white;
      }
     }
    ul {
      list-style: none;
      padding: 0;
    }

    p {
      margin: 0;
    }

    button {

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
