import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const AdminContentWrapper = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  border-right: 1px grey solid;
  padding-left: 2vw;

  @media ${device.mobileL}{
    padding-left: 0;
  }
`;