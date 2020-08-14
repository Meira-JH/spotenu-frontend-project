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
    max-height: 85vw;
  }
  @media ${device.tablet}{
    max-height: 110vw;
  }
  @media ${device.mobileL}{
    max-height: 140vw;
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
    color: #614EA0;
    font-weight: 900;
  }
  @media ${device.mobileL}{
    font-size: 12px;
  }
}
`;

export const SecondBlock = styled.div`
  padding: 90px 0;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media ${device.tablet}{
    padding: 50px 0;
  }
`;

export const SecondTitle = styled.p`
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


export const SecondSubtitle = styled.p`
  padding-top: 70px;
  color: #483f35;
  font-size: 20px;
  text-align: center;

  @media ${device.laptop}{
    font-size: 19px;
  }
  @media ${device.mobileL}{
    padding-top: 10vw;
    font-size: 15px;
  }
`;

export const CardsWrapper = styled.div`
  padding-top: 35px;
  width: 700px;
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.laptop}{
    flex-direction: column;
    align-items: center;
  }
`

export const PlanCard = styled.div`
  width: 300px;
  height: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 0 5px;
  border-radius: 10px;

  @media ${device.laptop}{
    height: 370px;
    margin-top: 40px;
    width: 90%;
  }
`

export const CardHeader = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px lightgrey solid;
`

export const IconCard = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #614EA0;
  color: white;
  text-align: center;
  border-radius: 5px;
`

export const CardTitle = styled.span`
  padding-top: 15px;
  color: #483f35;
  font-size: 26px;
  font-weight: 700;
`

export const CardSubtitle = styled.span`
  padding-top: 10px;
  color: #483f35;
  font-size: 20px;
  font-weight: 500;
`

export const CardBody = styled.div`
  height: 230px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CardItems = styled.div`
  height: 40px;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
`

export const IconItem = styled.img`
  height: 20px;
  padding-right: 10px;
`

export const ItemText = styled.span`
  font-size: 20px;
  color: #483f35;
`

export const CardButton = styled(Button)`
&& {  
  background-color: rgb(255, 205, 2);
  width: 100%;
  color: #ffff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: rgb(72, 63, 53, 0.1);
    color: #614EA0;
    font-weight: 900;
  }
  @media ${device.mobileL}{
    font-size: 12px;
  }
}
`;