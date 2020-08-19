import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const Card = styled.div`
  width: 200px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 3px black;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 200px;
    height: 100px;
  }
`;

export const CardActions = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffcd02;
  margin-top: 10px;
`;
export const IconButton = styled.div`
  width: 25px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;

export const CardContent = styled.div`
  width: 85%;
  height: 80px;
  display:flex;
  flex-direction: column;
  padding: 10px 5px;
`;
export const Title = styled.span`
  width: 100%;
  height: auto;
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
`;
export const Band = styled.span`
  width: 100%;
  height: 13px;
  font-size: 13px;
`;
