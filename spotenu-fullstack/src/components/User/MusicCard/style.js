import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";

export const Card = styled.div`
align-self: flex-start;
justify-self: center;
  width: 200px;
  height: 200px;
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
  border-radius: 5px 5px 0 0;
`;
export const IconButton = styled.div`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
`;

export const CardMedia = styled.img`
  height: 120px;
  padding: 10px 0;
  @media ${device.tablet} {
    display: none;
  }
`;

export const CardContent = styled.div`
  padding: 5px;
  width: 85%;
  height: 80px;
  display: flex;
  flex-direction: column;
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
