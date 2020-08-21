import styled from "styled-components";
import img from "../../img/music/bruce-mars-signup-unsplash.jpg";
import { Button, TextField } from "@material-ui/core";
import { device } from "../../components/Layout/mediaQueries";

export const SignUpPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FirstBlock = styled.div`
  width: 100%;
  min-height: 600px;
  max-height: 40vw;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    " . . ."
    " . FormWrapper ."
    " . . . ";
  box-shadow: 0 1px 5px;
  padding-top: 20px;

  @media ${device.laptopL}{
    max-height: 58vw;
  }
  @media ${device.laptop}{
    max-height: 65vw;
  }
  @media ${device.tablet}{
    max-height: 95vw;
  }
  @media ${device.mobileL}{
    max-height: 140vw;
    background-size: auto;
    background-position: left;
  }
`;

export const FormWrapper = styled.form`
  justify-self: center;
  grid-area: FormWrapper;
  width: 60%;
  min-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 8px;
  padding: 20px 20px ;
`;

export const SignUpLogo = styled.img`
  height: 5vw;
  max-height: 120px;
  min-height: 60px;
  margin-bottom: 10px;
`;

export const Warning = styled.span`
  font-size: 14px;
  color: red;
`


export const SignUpTextField = styled(TextField)`
  && {
    width: 15vw;
    text-align: center;
    min-width: 280px;

    @media ${device.tablet} {
      font-size: 5px;
    }
  }
`;

export const SignUpButton = styled(Button)`
  && {
    background-color: #614ea0;
    color: #ffff;
    &:hover {
      background-color: #ffff;
      color: #614ea0;
      font-weight: 900;
    }
  }
`;

export const GoToAdminRegistration = styled(Button)`
  && {
    background-color: #614ea0;
    color: #ffff;
    &:hover {
      background-color: #ffff;
      color: #614ea0;
      font-weight: 900;
    }
  }
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const SecondTitle = styled.p`
  padding-top: 2vw;
  color: #483f35;
  font-size: 35px;
  font-weight: 900;
  text-align: center;

  @media ${device.laptop}{
    font-size: 26px;
  }
  @media ${device.mobileL}{
    padding-top: 10vw;
    font-size: 22px;
  }
`;
