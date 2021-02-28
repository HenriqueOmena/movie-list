import { device } from "components/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 5vw;
  border: solid 1px yellow;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media ${device.laptop} {
    border: solid 10px green;
    flex: 1 1 160px;
  }
`;
