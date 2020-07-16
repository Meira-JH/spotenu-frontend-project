import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  " . LogoWrapper . ButtonWrapper . ";
  background-color: rgba(72, 63, 53, 0.3);
  position: fixed;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: LogoWrapper;
  display:flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 55%;
  color: white;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  grid-area: ButtonWrapper;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: #ff595c;
  height: 100%;
`;


export const SignUp = styled.p`
  text-align: center;
  font-size: 18px;
  color: #ffff;
  font-weight: 700;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #614ea0;
    background-color: rgba(255, 255, 255, 0.7)
  }
`;

export const BandSignUp = styled.p`
  text-align: center;
  font-size: 18px;
  color: #ffff;
  font-weight: 700;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #614ea0;
    background-color: rgba(255, 255, 255, 0.7)
  }
`;

export const Login = styled.p`
  text-align: center;
  font-size: 18px;
  color: #ffff;
  font-weight: 700;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #ffcd02;
    background-color: rgba(97, 78, 160, 0.8)
  }
`;

