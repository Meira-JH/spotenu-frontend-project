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
`;

export const FirstBlock = styled.div`
  width: 100%;
  height: 40vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
  " . . . . ."
  " . TextWrapper . . ."
  " . . . . .";
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 1px 5px;
`;

export const FirstTextWrapper = styled.div`
  grid-area: TextWrapper;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1vw;
`;

export const FirstTitle = styled.p`
  color: #ffff;
  font-size: 50px;
  font-weight: 900;
`;

export const FirstText = styled.p`
  color: #ffff;
  font-size: 25px;
  font-weight: 400;
  padding-bottom: 2vw;
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
`;

export const SecondTitle = styled.p`
  padding-top: 3vw;
  color: black;
  font-size: 45px;
  font-weight: 900;
`;