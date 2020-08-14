
import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const MusicsContainer = styled.div`
min-height: 500px;
height: auto;
width: 40vw;
min-width: 1000px;
max-width: 1050px;
margin: 3vw 12vw 3vw 3vw;
padding: 30px 30px;
display: grid;
justify-content: center;
grid-gap: 3vw;
grid-template-columns: repeat(4, 200px);
grid-auto-rows: 13vw;
overflow-y: scroll;
box-shadow: 0 0 10px 1px #959094;

@media ${device.laptopL} {
  min-width: 700px;
  grid-template-columns: repeat(3, 220px);
  grid-auto-rows: 220px;
}
@media ${device.laptop} {
  min-width: 500px;
  grid-template-columns: repeat(2, 220px);
  grid-auto-rows: 220px;
}
@media ${device.tablet} {
  min-width: 300px;
  height: auto;
  grid-template-columns: repeat(1, 220px);
  grid-auto-rows: 140px;
  padding: 30px 0;
}
`;