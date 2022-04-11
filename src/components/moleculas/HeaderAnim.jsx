import React from 'react'
import styled from 'styled-components';

import CloudImage from '../../assets/img/CloudImage';
import imgHeader from '../../assets/img/header.svg'
import { Black, PrimaryColor, SecondaryColor} from '../../utils/constants';


const HeaderContainer = styled.div`
    position: relative;
    width: 100vw;
    height: auto;
    min-height: 80vh;
    padding-top: 3em;
    background-color: ${PrimaryColor};
    &::after{
      content: "";
      position: absolute;
      bottom: -50px;
      display: block;
      width: 100vw;
      height: 30%;
      background-color: ${SecondaryColor};
      @media (min-width: 1200px) {
        bottom: -82px;
        border: 2px solid ${Black};
        height: 14.45em;
      }
    }
`
const ImageContainer = styled.figure`
  position: relative;
  bottom: -5em;
  height: auto;
  min-height: 100%;
  width: 100vw;
  z-index: 70;
  @media (max-width: 680px) {
    /* right: 12em; */
    /* transform: translateX(-5rem);
    width: 1600%;
    min-width: 4000px; */
  }
` 
const Image = styled.img`
  position: absolute;
  bottom: 0;
  height: auto;
  min-height: 100%;
  width: 100vw;
  margin: 0 auto;
  object-fit: cover;
  object-position: center center;
  @media (max-width: 680px) {
    right: -1em;
    /* transform: translateX(-5rem); */
    width: 160%;
    /* min-width: 400px; */
  }
  @media (max-width: 768px) {
    min-height: 50%;
    bottom: 8em;
  }
  @media (min-width: 1200px) {
    width: 1000px;
    height: 543.28px;
    height: auto;
    min-height: auto;
    left: calc(50% - 500px);
  }
`

function HeaderAnim() {
  return (
    <HeaderContainer>
        <CloudImage/>
        <ImageContainer>
          <Image src={imgHeader} alt="Dibujo de weke creactive hub" />
        </ImageContainer>
    </HeaderContainer>
  )
}

export { HeaderAnim }