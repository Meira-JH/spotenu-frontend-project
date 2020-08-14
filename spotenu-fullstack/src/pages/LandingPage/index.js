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
import xIcon from "../../img/criss-cross.svg"
import vIcon from "../../img/tick.svg"

class LandingPage extends Component {

  render() {
    const plans = [
      {
        type: "premium",
        name: "Premium",
        value: "R$10,99/mês",
        icon: vIcon,
        button: "Seja Premium!",
        description: {
          one: "Pesquisa de músicas",
          two: "Criar e gerenciar playlists",
          three: "Ouvir música sem propagandas"
        }
      },
      {
        type: "free",
        name: "Gratuito",
        value: "R$0,00/mês",
        icon: xIcon,
        button: "Junte-se a nós!",
        description: {
          one: "Pesquisa de músicas",
          two: "Criar e gerenciar playlists",
          three: "Ouvir música sem propagandas"
        }
      },
    ]

    const renderPlansCards = plans.map((plan) => (
      <PlanCard>
      <CardHeader>
    <IconCard><span>{plan.name}</span></IconCard>
        <CardTitle>Plano Individual</CardTitle>
        <CardSubtitle> {plan.value} </CardSubtitle>
      </CardHeader>
      <CardBody>
          <CardItems>
            <IconItem src={plan.icon}/>
            <ItemText> {plan.description.one} </ItemText>
          </CardItems>
          <CardItems>
            <IconItem src={plan.icon}/>
            <ItemText>{plan.description.two}</ItemText>
          </CardItems>
          <CardItems>
            <IconItem src={plan.icon}/>
            <ItemText>{plan.description.three}</ItemText>
          </CardItems>
        </CardBody>
        <CardButton>{plan.button}</CardButton>
    </PlanCard>
    ))
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
              <SecondSubtitle>Ouça sem propagandas e tenha outros benefícios!</SecondSubtitle>
              <CardsWrapper>
                {renderPlansCards}
              </CardsWrapper>
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
