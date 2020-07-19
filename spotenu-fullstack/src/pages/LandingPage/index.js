import React, { Component, Fragment } from "react";
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
  StyledButton,
} from "./style";
import Layout from "../../components/Layout/FirstLayout";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <LandingPageWrapper>
            <FirstBlock>
              <FirstTextWrapper>
                <FirstTitle>Reverencie o que há de melhor na música</FirstTitle>
                <FirstText>
                  A Spotenu te oferece uma rede única de artistas e ouvintes
                  aficcionados pelas belas artes
                </FirstText>
                <StyledButton>Quero me conectar!</StyledButton>
              </FirstTextWrapper>
            </FirstBlock>
            <SecondBlock>
              <SecondTitle>O que é um Spotenu Premium?</SecondTitle>
            </SecondBlock>
          </LandingPageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toSignUpPage: () => dispatch(push(routes.signUp)),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
