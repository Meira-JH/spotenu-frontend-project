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
import firebase from 'firebase'

class Header extends Component {
  render() {
    const isLogged = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        return true
      } else {
        return false
      }
    });

    function logout () {
      firebase.auth().signOut().then( () => {
        this.props.goToLandingPage()
      }).catch(function(error) {
        console.log(error.code, error.message)
      });
    } 
    
    console.log(isLogged)
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
            Tem uma banda?
          </BandSignUp>
          {isLogged ? 
            (
              <Login 
              onClick = { logout }
              >
                Logout
              </Login>
            ) : (
              <Login 
              onClick = { this.props.goToLoginPage }
              >
                Login
              </Login>
            )
          }
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    goToLandingPage: () => dispatch(push(routes.root)),
    goToLoginPage: () => dispatch(push(routes.login)),
    goToSignUpPage: () => dispatch(push(routes.signUp)),
    goToSignUpBandPage: () => dispatch(push(routes.signUpBand)),
  }
}

export default connect(null, mapDispatchToProps)(Header);