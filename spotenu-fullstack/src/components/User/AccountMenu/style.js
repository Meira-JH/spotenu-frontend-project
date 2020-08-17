import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const AccountMenuWrapper = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: static;
  border-right: 1px grey solid;
  padding-left: 2vw;

  @media ${device.mobileL} {
    width: 180px;
  }
`;
