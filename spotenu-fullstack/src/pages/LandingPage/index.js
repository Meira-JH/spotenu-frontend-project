import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  LandingPageWrapper,
  FirstTextWrapper,
  FirstTitle,
  FirstText,
  FirstBlock,
  SecondBlock,
  SecondTitle,
  StyledButton
} from "./style";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  toLogin = (event) => {
    event.preventDefault();

    this.props.toLogin(this.state.email, this.state.password);
    console.log(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <LandingPageWrapper>
        <FirstBlock>
          <FirstTextWrapper>
            <FirstTitle>Divulgue sua música</FirstTitle>
            <FirstText>
              A Spotenu te oferece uma rede única de artistas e ouvintes
              aficcionados pelas belas artes
            </FirstText>
            <StyledButton>
              Quero me conectar!
            </StyledButton>
          </FirstTextWrapper>
        </FirstBlock>
        <SecondBlock>
          <SecondTitle>
            O que é um Spotenu Premium?
          </SecondTitle>
        </SecondBlock>
      </LandingPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toLogin: (email, password) => dispatch(toLogin(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
