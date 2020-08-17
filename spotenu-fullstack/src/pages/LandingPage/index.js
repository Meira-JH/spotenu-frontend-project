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
  SecondSubtitle,
  CardsWrapper,
  PlanCard,
  CardHeader,
  IconCard,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardItems,
  IconItem,
  ItemText,
  CardButton,
} from "./style";
import Layout from "../../components/Layout/FirstLayout/FirstLayout";
import xIcon from "../../img/criss-cross.svg";
import vIcon from "../../img/tick.svg";
import LoadingRing from "../../components/LoadingRing";

class LandingPage extends Component {

  componentDidMount() {
    console.log("update landing", this.props.currentUser);
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }
  componentDidUpdate() {
    console.log("update landing", this.props.currentUser);
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }

  render() {

    const plans = [
      {
        type: "premium",
        name: "Premium",
        value: "R$10,99/mês",
        icon: vIcon,
        button: "Seja Premium!",
        description: [
          "Pesquisa de músicas",
          "Criar e gerenciar playlists",
          "Ouvir música sem propagandas",
        ],
      },
      {
        type: "free",
        name: "Gratuito",
        value: "R$0,00/mês",
        icon: xIcon,
        button: "Junte-se a nós!",
        description: [
          "Pesquisa de músicas",
          "Criar e gerenciar playlists",
          "Ouvir música sem propagandas",
        ],
      },
    ];

    const renderPlansCards = plans.map((plan) => (
      <PlanCard>
        <CardHeader>
          <IconCard>
            <span>{plan.name}</span>
          </IconCard>
          <CardTitle>Plano Individual</CardTitle>
          <CardSubtitle> {plan.value} </CardSubtitle>
        </CardHeader>
        <CardBody>
          {plan.description.map((item) => (
            <CardItems>
              <IconItem src={plan.icon} />
              <ItemText> {item} </ItemText>
            </CardItems>
          ))}
        </CardBody>
        <CardButton>{plan.button}</CardButton>
      </PlanCard>
    ));

    return (
      <Fragment>
        <Layout>
            <LandingPageWrapper>
              <FirstBlock>
                <FirstTextWrapper>
                  <FirstTitle>
                    Reverencie o que há de melhor na música
                  </FirstTitle>
                  <FirstText>
                    A Spotenu te oferece uma rede única de artistas e ouvintes
                    aficcionados pelas belas artes
                  </FirstText>
                  <StyledButton onClick={this.props.toSignUpPage}>
                    Quero me conectar!
                  </StyledButton>
                </FirstTextWrapper>
              </FirstBlock>
              <SecondBlock>
                <SecondTitle>O que é um Spotenu Premium?</SecondTitle>
                <SecondSubtitle>
                  Ouça sem propagandas e tenha outros benefícios!
                </SecondSubtitle>
                <CardsWrapper>{renderPlansCards}</CardsWrapper>
              </SecondBlock>
            </LandingPageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSignUpPage: () => dispatch(push(routes.signUp)),
    goToUserPage: () => dispatch(push(routes.user)),
    goToBandPage: () => dispatch(push(routes.band)),
    goToAdminPage: () => dispatch(push(routes.admin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
