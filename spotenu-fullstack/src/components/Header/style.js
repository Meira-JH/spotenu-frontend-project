import styled, { css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  flex: none;
  margin-top: 300px;
  padding: 0 30px;
  transition: background-color 0.5;
  background-color: rgba(0, 0, 0, 0.6);

  ${(props) =>
    props.sticky &&
    css`
      margin-top: 0;
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      z-index: 1;
    `};
`;
