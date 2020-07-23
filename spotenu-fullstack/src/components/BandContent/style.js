import styled from "styled-components";
import { device } from "../Layout/mediaQueries";
import { TextField, Button } from "@material-ui/core";

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
`;

export const MusicCardContainer = styled.div`
  height: 77vh;
  min-width: 40vw;
  margin: 3vw 12vw 3vw 3vw;
  padding: 3vw 2vw;
  display: grid;
  justify-content: center;
  grid-gap: 3vw;
  grid-template-columns: repeat(5, 10vw);
  grid-auto-rows: 10vw;
  overflow-y: scroll;
  box-shadow: 0 0 10px 1px #959094;
  
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 15vw);
    grid-auto-rows: 15vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 20vw);
    grid-auto-rows: 20vw;
  }
  @media ${device.tablet} {
    height: 83vh;
    grid-template-columns: repeat(1, 40vw);
    grid-auto-rows: 30vw;
    margin: 2vw;
    padding: 0;
  }
`;

export const BandAlbumsContainer = styled.div`
  height: 77vh;
  min-width: 40vw;
  margin: 3vw 12vw 3vw 3vw;
  padding: 3vw 0;
  display: flex;
  justify-content: center;

  
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 15vw);
    grid-auto-rows: 15vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 20vw);
    grid-auto-rows: 20vw;
  }
  @media ${device.tablet} {
    height: 83vh;
    grid-template-columns: repeat(1, 40vw);
    grid-auto-rows: 30vw;
    margin: 2vw;
    padding: 0;
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

export const CreateAlbumButton = styled(Button)`
  && {
    background-color: #614ea0;
    color: #ffff;
    &:hover {
      background-color: rgba(250, 250, 250, 0.9);
      color: #614ea0;
      font-weight: 900;
    }
  }
`;