import { device } from "components/breakpoints";
import styled from "styled-components";

export const WrapperCards = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
`;
