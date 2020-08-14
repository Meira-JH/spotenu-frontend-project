import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background: #483f35;
  box-shadow: 0 1px 10px;
  position: relative;
  bottom: 0;
`;

export const LogoFooterWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreditFooterWrapper = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoFooter = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const SocialNetworksWrapper = styled.div`
  display: flex;
  width: 270px;
  justify-content: flex-start;
`;

export const SocialNetworksIcon = styled.img`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
`;

export const FooterCreditsWrapper = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 470px;
  height: 100%;
  color: #eef3fc;
`;
