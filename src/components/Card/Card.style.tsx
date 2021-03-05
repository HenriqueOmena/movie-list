import styled from "styled-components";

export const Container = styled.div`
  margin: 25px;
  margin: 0 auto;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1200px;

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
    background-color: #013567;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    h1 {
      flex-grow: 1;
      margin: 0;
    }

    article {
      overflow: hidden;

      .summary {
        padding: 0 20px;
        height: 220px;
        overflow-y: auto;
        padding-right: 17px;
        box-sizing: content-box;
      }
    }
  }
`;
