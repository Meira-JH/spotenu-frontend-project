import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const BandMenuWrapper = styled.div`
  width: 300px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: static;
  border-right: 1px grey solid;
  padding-left: 2vw;

  @media ${device.mobileL} {
    width: 150px;
  }
`;