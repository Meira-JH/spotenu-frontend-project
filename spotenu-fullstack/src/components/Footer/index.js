import React from "react";
import { FooterWrapper, FooterLinksWrapper, FooterCreditsWrapper } from "./style";


export default function Footer() {
  return (
      <FooterWrapper>
        <FooterLinksWrapper>
          <a>Legal</a>
          <a>Cookies</a>
          <a>Sobre anúncios</a>
        </FooterLinksWrapper>
        <FooterCreditsWrapper>
          <p>Background Picture by Malte Wingen</p>
        </FooterCreditsWrapper>
      </FooterWrapper>
  );
}
