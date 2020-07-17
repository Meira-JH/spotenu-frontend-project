import styled from "styled-components";
import img from "../../img/music/hans-band-unsplash.jpg";
import { Button, TextField } from "@material-ui/core";

export const SignUpBandPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FirstBlock = styled.div`
  width: 100%;
  height: 42vw;
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
`;

export const FormWrapper = styled.form`
  justify-self: center;
  grid-area: FormWrapper;
  width: 60%;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 8px;
  padding: 1vw 2vw ;
`;

export const SignUpBandLogo = styled.img`
  max-height: 5vw;
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
  width: 18vw;
  text-align: center;
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
`;