import styled from "styled-components";
import img from "../../img/music/bruce-mars-signup-unsplash.jpg";
import { Button, TextField } from "@material-ui/core";

export const SignUpPageWrapper = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormWrapper = styled.form`
  width: 20%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 8px;
  padding: 2vw;
`

export const SignUpButton = styled(Button)`
`

export const SignUpTextField = styled(TextField)`
  width: 20vw;
`

