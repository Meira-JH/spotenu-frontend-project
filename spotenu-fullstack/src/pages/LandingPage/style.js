import styled from "styled-components";
import img from "../../img/music/malte-wingen-background1-unsplash.jpg";
import Button from "@material-ui/core/Button";

export const LandingPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FirstBlock = styled.div`
  width: 100%;
  height: 40vW;
  display: grid;
  justify-items: start;
  grid-template: 1fr, 1fr, 1fr, 1fr / 1fr, 1fr;
  grid-template-areas: 
  ". TextWrapper . ."
  ". TextWrapper . .";
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 10vw;
`;

export const FirstTextWrapper = styled.div`
  align-self: center;
  grid-area: TextWrapper;
  width: 40%;
  height: 60%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FirstTitle = styled.span`
  color: #ffff;
  font-size: 60px;
  font-weight: 900;
`;

export const FirstText = styled.p`
  color: #ffff;
  font-size: 30px;
  font-weight: 500;
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
}
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 10vw;
`;

export const SecondTitle = styled.p`
  color: black;
  font-size: 45px;
  font-weight: 900;
`;