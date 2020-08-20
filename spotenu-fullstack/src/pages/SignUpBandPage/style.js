import styled from "styled-components";
import img from "../../img/music/hans-band-unsplash.jpg";
import { Button, TextField } from "@material-ui/core";
import { device } from "../../components/Layout/mediaQueries";

export const SignUpBandPageWrapper = styled.div`
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

  @media ${device.laptopL} {
    padding-top: 30px;
    max-height: 58vw;
  }
  @media ${device.laptop} {
    max-height: 65vw;
  }
  @media ${device.tablet} {
    max-height: 95vw;
  }
  @media ${device.mobileL} {
    max-height: 160vw;
    background-size: auto;
    background-position: right;
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
  padding: 15px 20px ;
  min-width: 300px;

  @media ${device.laptop}{
    height: 95%;
  }
`;

export const Warning = styled.span`
  font-size: 14;
  color: red;
`

export const SignUpBandLogo = styled.img`
  height: 5vw;
  max-height: 120px;
  min-height: 60px;
  margin-bottom: 10px;
`;

export const SignUpBandTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #483f35;
`;

export const SignUpBandButton = styled(Button)`
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

export const SignUpBandTextField = styled(TextField)`
  && {
    width: 15vw;
    text-align: center;
    min-width: 280px;

    @media ${device.tablet} {
      width: 200px;
      font-size: 5px;
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
  color: black;
  font-size: 35px;
  font-weight: 900;
  text-align: center;

  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.mobileL} {
    padding-top: 10vw;
    font-size: 22px;
  }
`;