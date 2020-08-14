import React from "react";
import {
  FooterWrapper,
  LogoFooterWrapper,
  FooterCreditsWrapper,
  CreditFooterWrapper,
  LogoFooter,
  SocialNetworksWrapper,
  SocialNetworksIcon,
} from "./style";
import Instagram from "../../img/instagram.svg";
import Facebook from "../../img/facebook.svg";
import Youtube from "../../img/youtube.svg";
import logo from "../../img/music/logocabecacirculo.png";

export default function Footer() {
  return (
    <FooterWrapper>
      <LogoFooterWrapper>
        <LogoFooterWrapper>
          <SocialNetworksWrapper>
            <SocialNetworksIcon src={Instagram} />
            <SocialNetworksIcon src={Facebook} />
            <SocialNetworksIcon src={Youtube} />
          </SocialNetworksWrapper>
        </LogoFooterWrapper>
      </LogoFooterWrapper>
      <CreditFooterWrapper>
        <FooterCreditsWrapper>
          <LogoFooter src={logo} />
          <p>Background pictures from Unsplash by:</p>
          <p>Malte Wingen</p>
          <p>Frank Septillion</p>
        </FooterCreditsWrapper>
      </CreditFooterWrapper>
    </FooterWrapper>
  );
}
