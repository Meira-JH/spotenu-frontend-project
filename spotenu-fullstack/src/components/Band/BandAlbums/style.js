
import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const BandAlbumsContainer = styled.div`
height: 77vh;
min-width: 40vw;
margin: 3vw 12vw 3vw 3vw;
padding: 3vw 2vw;
display: grid;
justify-content: center;
grid-gap: 3vw;
grid-template-columns: repeat(4, 13vw);
grid-auto-rows: 13vw;
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
  justify-content: center;
    width: 90%;
    height: 100%;
    grid-template-columns: repeat(1, 200px);
    grid-auto-rows: 100px;
    padding: 10px;
    margin: 20px 0;
    box-shadow: none;
}
`;