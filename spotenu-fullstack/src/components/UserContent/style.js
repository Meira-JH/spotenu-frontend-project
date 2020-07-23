import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const UserContentWrapper = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  position: static;
  border-right: 1px grey solid;
  padding-left: 2vw;
`;

export const MusicCardContainer = styled.div`
  height: 77vh;
  min-width: 40vw;
  margin: 3vw 12vw 3vw 3vw;
  padding: 3vw 0;
  display: grid;
  justify-content: center;
  grid-gap: 1vw;
  grid-template-columns: repeat(5, 10vw);
  grid-auto-rows: 10vw;
  overflow-y: scroll;
  box-shadow: 0 0 10px 1px #959094;
  
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 15vw);
    grid-auto-rows: 15vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 20vw);
    grid-auto-rows: 20vw;
  }
  @media ${device.tablet} {
    height: 83vh;
    grid-template-columns: repeat(1, 40vw);
    grid-auto-rows: 30vw;
    margin: 2vw;
    padding: 0;
  }
`;
