import styled from 'styled-components' 
import { device } from '../Layout/mediaQueries'

export const Card = styled.div`
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
    height: 130px;
}
`

export const CardActions = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const IconButton = styled.div`
    width: 45px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardMedia = styled.img`
    height: 120px;
    padding: 10px 0;
    @media ${device.tablet} {
    display: none;
}
`

export const CardContent = styled.div`
    width: 85%;
    height: 80px;
`
export const Title = styled.span`
    width: 100%;
    height: 13px;
    font-size: 13px;
    font-weight: 700;
`
export const Band = styled.span`
    width: 100%;
    height: 13px;
    font-size: 13px;
`
