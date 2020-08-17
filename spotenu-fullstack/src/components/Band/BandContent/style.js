import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";
import { TextField, Button, Select } from "@material-ui/core";

export const BandContentWrapper = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  border-right: 1px grey solid;
  padding-left: 2vw;

  @media ${device.mobileL}{
    padding-left: 0;
  }
`;

export const FormWrapper = styled.form`
  justify-self: center;
  grid-area: FormWrapper;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 8px;
  padding: 1vw 2vw ;

  @media ${device.laptopL}{
    min-width: 300px;
  }
  @media ${device.tablet}{
    width: 300px;
  }
  @media ${device.mobileL}{
    padding: 5px 30px;
    width: auto;
  }
`;


export const CreateAlbumTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #483f35;
`;

export const CreateAlbumTextField = styled(TextField)`
  && {
    width: 25vw;
    text-align: center;

    @media ${device.tablet} {
      width: 200px;
      font-size: 5px;
    }
  }
`;

export const CreateAlbumSelect = styled(Select)`
  && {
    width: 25vw;
    min-width: 180px;
  }
`;

export const CreateAlbumButton = styled(Button)`
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

export const CreateMusicTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #483f35;
`;

export const CreateMusicTextField = styled(TextField)`
  && {
    width: 25vw;
    text-align: center;

    @media ${device.tablet} {
      width: 200px;
      font-size: 5px;
    }
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