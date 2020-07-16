import styled from "styled-components";
import img from "../../img/music/bruce-mars-signup-unsplash.jpg";

export const LoginPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormWrapper = styled.form`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.7);
  border-radius: 5px;
  padding: 2vw;
`

