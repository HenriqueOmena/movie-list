import { device } from "components/breakpoints";
import styled from "styled-components";

interface FlipCardProps {
  extend?: boolean;
}

export const Container = styled.div``;

export const ExtendCard = styled.div`
  display: ${(p: FlipCardProps) => (p.extend ? "block" : "none")};
  ul {
    li {
      padding: 10px;
      float: left;
    }
  }

  @media ${device.mobileS} {
    width: 600px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1200px;

  .extend-card {
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  &:hover .inner {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .front {
    background-color: #bbb;
    text-align: left;
    img {
      width: 300px;
      height: 400px;
    }
  }

  .back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;
