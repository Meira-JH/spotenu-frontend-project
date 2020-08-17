import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: " . LogoWrapper . . ButtonWrapper ButtonWrapper .";
  background-color: rgb(72, 63, 53, 0.5);
  position: fixed;
  z-index: 1;

`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: LogoWrapper;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.img`
  min-width: 210px;
  width: 83%;
  max-width: 280px;
  color: white;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  grid-area: ButtonWrapper;
  min-width: 300px;
  font-size: 23px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-self: flex-end;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #ff595c;
  height: 100%;

  @media ${device.laptopL} {
    font-size: 19px;
  }
  @media ${device.laptop} {
    justify-self: center;
  }
  @media ${device.tablet} {
    justify-self: flex-end;
    font-size: 17px;
  }
`;

export const SignUp = styled.p`
  height: 84px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffff;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 6px transparent solid;

  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom-color: rgb(255, 205, 2, 0.9);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const BandSignUp = styled.p`
  height: 84px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffff;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 6px transparent solid;
  margin: 0 14px;

  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom-color: rgb(255, 205, 2, 0.9);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const Login = styled.p`
  text-align: center;
  color: #ffff;
  font-weight: 500;
  padding: 0 0 6px 4px;
  border-radius: 0 8px 8px 0;
  border-left: 1px white solid;
  padding-left: 1vw;
  cursor: pointer;
  text-decoration: underline transparent;
  transition: all ease-in-out 400ms;

  &:hover {
    text-decoration: underline 3px solid rgb(255, 205, 2);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 100%;
      display: flex;
      justify-content: flex-end;
    }
`
