import { device } from "components/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media ${device.mobileS} {
    padding-top: 30px;
  }

  @media ${device.tablet} {
    padding-top: 40px;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;

  select {
    padding: 7px 12px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Episode = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const VideoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 5vw;

  .duration {
    padding: 15px 20px;
    text-align: left;
    flex-grow: 1;
    max-width: 600px;

    .highlight {
      margin-top: 20px;
      font-weight: 600;
      text-decoration: double;
      text-align: right;
    }

    .description {
      text-align: left;
      padding-left: 20px;
    }

    @media ${device.laptopL} {
      min-width: 40vw;
      max-width: 740px;
      max-height: 350px;
      padding: 0;
    }
    @media ${device.tablet} {
      text-align: center;
    }
  }

  img {
    width: 62vw;
    transition: transform 2s, filter 1.5s ease-in-out;
    transform-origin: center center;
    filter: brightness(70%);

    @media ${device.tablet} {
      max-width: 350px;
    }

    &:hover {
      filter: brightness(100%);
      transform: scale(1.1);
    }
  }

  @media ${device.laptopL} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  min-width: 200px;
  text-align: left;
  margin-bottom: 10px;
  @media ${device.mobileM} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`;
