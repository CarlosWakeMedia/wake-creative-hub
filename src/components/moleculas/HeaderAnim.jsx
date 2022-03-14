import React from 'react'
import styled, {keyframes} from 'styled-components';

import CloudImage from '../../assets/img/CloudImage';
import image from '../../assets/img/imageHeader.svg'
import { Black } from '../../utils/constants';

const moveText = keyframes`
    to{
        transform: translateX(0%);
    }
`;

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    padding-top: 12em;
    background-color: #FBB04B;
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background-color: #F47F6B;
    }
`
const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 20;
    padding-top: 3em;
`
const Title = styled.h1`
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 60px);
    color: ${Black};
    z-index: 50;
    font-size: 6rem;
    font-style: italic;
    overflow: hidden;
`
const TitleWake = styled.span`
    display: block;
    transform: translateX(-100%);
    animation: ${moveText} .5s 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`
const TitleCreative = styled.span`
    display: block;
    padding-left: 2em;
    font-size: 3rem;
    transform: translateX(-100%);
    animation: ${moveText} .5s 1;
    animation-delay: .6s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`

function HeaderAnim() {
  return (
    <HeaderContainer>
        <CloudImage/>
        <Image src={image} />
        <Title>
            <TitleWake>Wake</TitleWake> 
            <TitleCreative>Creative Hub</TitleCreative>
        </Title>
    </HeaderContainer>
  )
}

export { HeaderAnim } 