import React from 'react'
import styled from 'styled-components';

import CloudImage from '../../assets/img/CloudImage';
import imgHeader from '../../assets/img/header.png'
import { PrimaryColor, SecondaryColor} from '../../utils/constants';


const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    min-height: 80vh;
    padding-top: 3em;
    background-color: ${PrimaryColor};
    &::after{
      content: "";
      position: absolute;
      bottom: -50px;
      display: block;
      width: 100%;
      height: 30%;
      background-color: ${SecondaryColor};
    }
`
const ImageContainer = styled.figure`
  position: relative;
  bottom: -5em;
  height: auto;
  min-height: 100%;
  width: 100%;
  z-index: 70;
  @media (max-width: 680px) {
    right: 8em;
    width: 140%;
  }
` 
const Image = styled.img`
  position: absolute;
  bottom: 0;
  height: auto;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  object-position: center center;
  @media (max-width: 768px) {
    min-height: 50%;
    bottom: 8em;
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