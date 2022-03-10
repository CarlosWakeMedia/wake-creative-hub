import React from 'react';
import styled from 'styled-components';
import { SecondaryColor } from '../../utils/constants'
import aboutImage from '../../assets/img/AboutImage.png';

const AboutContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background-color: ${SecondaryColor};
`
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "img    img "
        "list  list "
        "desc  desc "
    ;
    width: 90%;
    height: auto;
    margin: 0 auto;
    background-color: #F8EEE2;
    border-radius: 30px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
    @media (min-width: 768px) {
        grid-template-columns: 40% auto;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "img    list "
            "img  desc "
        ;
        width: 75%;
    }
`
const Image = styled.img`
  grid-area: img;
  width:90%;
  margin: 1rem;
`
const AboutList = styled.ul`
    grid-area: list;
    place-self: center;
    padding: 0;
    width: 80%;
    list-style:none;
    font-weight: bold;
    font-style: italic;
    @media (min-width: 768px) {
        text-align: center;
    }
`
const AboutListItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: .3em;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (min-width: 1400px) {
      font-size: 1.8rem;
      text-align: center;
    }

`
const AboutText = styled.p`
    grid-area: desc;
    width: 80%;
    max-width: 400px;
    place-self: center;
    font-size: 1rem;
    @media (min-width: 768px) {
        text-align: center;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (min-width: 1400px) {
      font-size: 1.8rem;
      text-align: center;
    }
`

const AboutSecction = () => {
  return (
    <AboutContainer id='About'>
      <ContentContainer>
        <Image src={aboutImage}/>
        <AboutList>
          <AboutListItem>No somos una consultora.</AboutListItem>
          <AboutListItem>No somos un estudio.</AboutListItem>
          <AboutListItem>No somos agencia.</AboutListItem>
          <AboutListItem>No somos una boutique de servicios.</AboutListItem>
        </AboutList>
        <AboutText>
            <b>WAKE es un hub</b> que busca conocer el
            status-quo de sus clientes para desarrollar y
            crear una nueva realidad con soluciones
            digitales, basadas siempre en datos reales y
            análisis que impulsan la creatividad en todo
            sentido.
        </AboutText>
      </ContentContainer>
    </AboutContainer>
  )
}

export { AboutSecction };
