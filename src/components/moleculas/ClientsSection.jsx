import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../utils/constants'
import clientsImage from '../../assets/img/clientsImage.png';
import clientsLogos from '../../assets/img/clientsLogos.png';


const ClientsContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 3rem 0;
    background-color: ${SecondaryColor};
`
const ContentContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    margin: 0 auto;
    background-color: ${PrimaryColor};
`
const Image = styled.img`
    width:100%;
    max-width: 650px;
    @media (min-width: 768px) {
        width:45%;
    }
    `
const MarksContainer = styled.div`
    width:100%;
    @media (min-width: 768px) {
        width:50%;
    }
`
const MarkLogo = styled.img`
    width:100%;
    padding: 1em 0;
`


const ClientsSection = () => {
  return (
    <ClientsContainer>
       <ContentContainer>
            <Image src={clientsImage}/>
            <MarksContainer>

                <MarkLogo src={clientsLogos}/>

            </MarksContainer>
       </ContentContainer>
    </ClientsContainer>
  )
}

export { ClientsSection };
