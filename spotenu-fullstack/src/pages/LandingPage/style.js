import styled from "styled-components";
import img from "../../img/music/malte-wingen-background1-unsplash.jpg";
import Button from "@material-ui/core/Button";
import { device } from "../../components/Layout/mediaQueries";

export const LandingPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const FirstBlock = styled.div`
  width: 100%;
  max-height: 40vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
  " . . . . . ."
  " Responsive TextWrapper TextWrapper . . ."
  " . . . . . .";
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 1px 5px;

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
    max-height: 120vw;
    background-size: auto;
    background-position: left;
  }
`;

export const FirstTextWrapper = styled.div`
  grid-area: TextWrapper;
  width: 90%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1vw;

  @media ${device.tablet}{
    width: 35vw;
    grid-area: Responsive;
    padding-left: 10vw;
  }
  @media ${device.mobileL}{
    width: 70vw;
    grid-area: TextWrapper;
    padding: 15vw 0 0 0;
    align-items: center;
  }
`;


export const FirstTitle = styled.p`
  color: #ffff;
  font-size: 40px;
  font-weight: 900;

  @media ${device.mobileL}{
    font-size: 28px;
    text-align: center;
  }
`;

export const FirstText = styled.p`
  width: 78%;
  color: #ffff;
  font-size: 25px;
  font-weight: 400;
  padding-bottom: 2vw;

  @media ${device.mobileL}{
    width: auto;
    font-size: 16px;
    margin: 3vw;
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
&& {  
  background-color: #614EA0;
  color: #ffff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #ffff;
    color: #483f35;
    font-weight: 900;
  }
  @media ${device.mobileL}{
    font-size: 12px;
  }
}
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const SecondTitle = styled.p`
  padding-top: 3vw;
  color: black;
  font-size: 45px;
  font-weight: 900;

  @media ${device.laptop}{
    font-size: 26px;
    text-align: center;
  }
  @media ${device.mobileL}{
    padding-top: 10vw;
    font-size: 22px;
  }
`;

