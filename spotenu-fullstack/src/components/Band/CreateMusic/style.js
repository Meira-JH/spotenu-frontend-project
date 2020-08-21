
import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";
import { TextField, Button, Select } from "@material-ui/core";

export const CreateMusicWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const FormWrapper = styled.form`
justify-self: center;
grid-area: FormWrapper;
width: 50%;
min-width: 300px;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: rgba(250, 250, 250, 0.9);
border-radius: 8px;
padding: 1vw 2vw ;

@media ${device.laptopL}{
}
@media ${device.tablet}{
  width: 300px;
}
@media ${device.mobileL}{
  padding: 0 25px;
  width: auto;
  min-width: 90px;
}
@media ${device.mobileM}{
  padding: 0 15px;
  width: auto;
  min-width: 80px;
}
`;


export const CreateMusicTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #483f35;
`;

export const CreateMusicTextField = styled(TextField)`
  && {
    width: 25vw;
    text-align: center;
    min-width: 200px;

    @media ${device.tablet} {
      min-width: 160px;
      font-size: 5px;
    }
  }
`;

export const CreateMusicSelect = styled(Select)`
  && {
    width: 25vw;
    min-width: 160px;
  }
`;

export const CreateMusicButton = styled(Button)`
  && {
    background-color: #614ea0;
    color: #ffff;
    &:hover {
      background-color: rgb(255, 205, 2, 0.5);
      color: #483f35;
      font-weight: 900;
    }
  }
`;