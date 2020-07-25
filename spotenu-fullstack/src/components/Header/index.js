import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  SignUp,
  BandSignUp,
  Login,
  ButtonWrapper,
  MenuContainer,
} from "./style";
import logo from "../../img/method-draw-image.svg";
import logoHover from "../../img/method-draw-image-hover.svg";
import firebase from "firebase";
import CustomizedMenus from "../HiddenMenu";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uid: undefined
    };
  }
  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return this.setState({
          uid: user.uid
        })
      }
    });
    const isLogged = this.state.uid
    
    const logout = async () => {
      firebase.auth().signOut()
      window.location.reload();
    } 

    return (
      <HeaderWrapper>
        <LogoWrapper>
          <Logo
            src={logo}
            onMouseOver={(event) => (event.currentTarget.src = logoHover)}
            onMouseOut={(event) => (event.currentTarget.src = logo)}
            onClick={() => this.goTo("/")}
          />
        </LogoWrapper>
        <ButtonWrapper>
          <MenuContainer>
            <CustomizedMenus />
          </MenuContainer>
          <SignUp 
            onClick={() => this.goTo("/signUp")}
          >Cadastre-se!
          </SignUp>
          <BandSignUp 
            onClick={() => this.goTo("/signUpBand")}
          >Tem uma banda?
          </BandSignUp>
          {isLogged ? (
            <Login onClick={logout}>Logout</Login>
          ) : (
            <Login onClick={() => this.goTo("/login")}>Login</Login>
          )}
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);
