import styled from "styled-components";

export const Container = styled.div`
  .collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }

  .active,
  .collapsible:hover {
    background-color: #555;
    display: block !important;
  }

  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
    color: black;
  }
`;
