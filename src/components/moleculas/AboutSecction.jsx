import React from 'react';
import styled from 'styled-components';
import { Black, SecondaryColor } from '../../utils/constants'
import aboutImage from '../../assets/img/aboutImage.svg';

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
      "list  list "
      "img    img "
      "desc  desc "
    ;
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 1em 0;
    background-color: #F8EEE2;
    /* border-radius: 30px; */
    /* border: 2px solid ${Black}; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
    @media (min-width: 768px) {
        grid-template-columns: 40% auto;
        grid-template-rows: 45% 55%;
        grid-template-areas:
            "img    list "
            "img  desc "
        ;
        width: 75%;
    }
`
const Image = styled.img`
  grid-area: img;
  place-self: center;
  width: 50%;
  margin: 2rem;
  @media (min-width: 768px) {
    width: 80%;
  }
`
const AboutList = styled.ul`
    grid-area: list;
    place-self: end center;
    padding: 1em 0 ;
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
    padding: 1em 0;
    place-self: start center;
    font-size: 1rem;
    @media (min-width: 768px) {
        text-align: center;
    }
    @media (min-width: 1024px) {
      padding-top: 0;
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
        <Image src={aboutImage} alt={'Imagen del Acerca de wake creative hub'} />
        <AboutList>
          <AboutListItem>No somos una consultora</AboutListItem>
          <AboutListItem>No somos un estudio</AboutListItem>
          <AboutListItem>No somos agencia</AboutListItem>
          <AboutListItem>No somos una boutique de servicios</AboutListItem>
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
