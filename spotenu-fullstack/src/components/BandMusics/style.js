
import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const BandMusicsContainer = styled.div`
height: 77vh;
min-width: 40vw;
margin: 3vw 12vw 3vw 3vw;
padding: 3vw 2vw;
display: grid;
justify-content: center;
grid-gap: 3vw;
grid-template-columns: repeat(4, 14vw);
grid-auto-rows: 14vw;
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