import React, { Component } from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  SignUp,
  BandSignUp,
  Login,
  ButtonWrapper,
} from "./style";
import logo from "../../img/method-draw-image.svg";
import logoHover from "../../img/method-draw-image-hover.svg";
import { routes } from "../../router";
import { connect } from "react-redux"
import { push, replace } from "connected-react-router"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>
          <Logo
            src={logo}
            onMouseOver={(event) => (event.currentTarget.src = logoHover)}
            onMouseOut={(event) => (event.currentTarget.src = logo)}
            onClick={this.props.goToLandingPage}
          />
        </LogoWrapper>
        <ButtonWrapper>
          <SignUp 
          onClick = { this.props.goToSignUpPage }
          >
            Cadastre-se!
          </SignUp>
          <BandSignUp 
          onClick = { this.props.goToSignUpBandPage }
          >
            Tem um banda?
          </BandSignUp>
          <Login 
          onClick = { this.props.goToLoginPage }
          >
            Login
          </Login>
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    goToLandingPage: () => dispatch(push(routes.root)),
    goToLoginPage: () => dispatch(replace(routes.login)),
    goToSignUpPage: () => dispatch(push(routes.signUp)),
    goToSignUpBandPage: () => dispatch(push(routes.signUpBand)),
  }
}

export default connect(null, mapDispatchToProps)(Header);