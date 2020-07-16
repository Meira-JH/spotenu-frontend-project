import React, { Component } from "react";
import { 
  HeaderWrapper,
  LogoContainer,
  Logo,
  SignUp,
 } from "./style";
 import logo from "../../img/method-draw-image.svg";
 import logoHover from "../../img/method-draw-image-hover.svg";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoContainer>
          <Logo 
          src={(logo)}
          onMouseOver={event => (event.currentTarget.src = logoHover)}
          onMouseOut={event => (event.currentTarget.src = logo)}
          />
        </LogoContainer>
          <SignUp onClick>
            Cadastre-se!
          </SignUp>
      </HeaderWrapper>
    );
  }
}

export default Header;
