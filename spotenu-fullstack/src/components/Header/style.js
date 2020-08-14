import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: " . LogoWrapper . . ButtonWrapper ButtonWrapper ";
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
  font-size: 1.2vw;
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: #ff595c;
  height: 100%;

  @media ${device.laptopL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
  }
`;

export const SignUp = styled.p`
  text-align: center;
  color: #ffff;
  font-weight: 500;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    color: #ffff;
    background-color: rgb(255, 205, 2, 0.9);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const BandSignUp = styled.p`
  text-align: center;
  color: #ffff;
  font-weight: 500;
  padding: 4px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    color: #ffff;
    background-color: rgb(255, 205, 2, 0.9);
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
  padding: 4px;
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
      display: inline;
    }
`
