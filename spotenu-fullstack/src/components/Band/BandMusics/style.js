
import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const BandMusicsContainer = styled.div`
  height: 77vh;
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 200px);
  grid-auto-rows: 240px;
  overflow-y: scroll;
  box-shadow: 0 0 10px 1px #959094;
  margin: 40px 40px;
  padding: 40px;

  @media ${device.laptopL} {
    grid-template-columns: repeat(2, 200px);
    grid-auto-rows: 210px;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 200px);
    grid-auto-rows: 210px;
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