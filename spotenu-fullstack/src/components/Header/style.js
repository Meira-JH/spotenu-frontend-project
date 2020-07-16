import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: grid;
  width: 100%;
  justify-items: start;
  align-items: center;
  height: 90px;
  grid-template: 1fr, 1fr, 1fr, 1fr / 1fr;
  grid-template-areas: ". Logo . . ButtonSignUp .";
  background-color: rgba(72, 63, 53, 0.3);
  position: fixed;
`;

export const LogoContainer = styled.div`
  height: 80%;
  grid-area: Logo;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
`;

export const SignUp = styled.p`
  text-align: center;
  grid-area: ButtonSignUp;
  font-size: 1.5vw;
  color: #ffff;
  font-weight: 700;
  cursor: pointer;
  margin-right: 2vw;  
  justify-items: start;
  &:hover {
    color: #614EA0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5vw;
  color: #ff595c;
  font-weight: 700;
  height: 70%;
  padding-right: 12vw;
  cursor: pointer;
`;
