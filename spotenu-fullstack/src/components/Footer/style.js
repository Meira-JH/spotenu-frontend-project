import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18vh;
  background: #483f35;
  box-shadow: 0 1px 10px;
  position: relative;
  bottom: 0;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  height: auto;
  color: #eef3fc;
`;

export const FooterCreditsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: auto;
  padding-right: 4vw;
  color: #eef3fc;
`;
