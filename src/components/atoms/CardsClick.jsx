import React from 'react';
import styled, {keyframes} from 'styled-components';
import { BsFillHandIndexFill } from "react-icons/bs";

import card1 from '../../assets/img/images-test/imgTest1.svg';
import card2 from '../../assets/img/images-test/imgTest2.svg';
import card6 from '../../assets/img/images-test/imgTest3.svg';

import card3 from '../../assets/img/card3.svg';
import card4 from '../../assets/img/card4.svg';
import card5 from '../../assets/img/card5.svg';

import data from '../../infoCards.json';

import { White, Black, SecondaryColor, BackgroundColor } from '../../utils/constants'

const move = keyframes`
  to {
    top: 35px;
    right: 20px;
  }
`;


const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 90%;
  min-width: 300px;
  max-width: 550px;
  height: auto;
`;
const ContainerImage = styled.figure`
  position: relative;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  margin: 0;
  overflow: hidden;
  border: 4px solid ${Black};
  background-color: ${White};
  z-index: ${props => props.index};
  transition: all .7s ease;
`;
const ImageCard = styled.img`
  width: 100%;
`;
const TitleCardContainer = styled.figcaption`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: ${White};
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 10px 0;
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  left: 3%;
  transform: translateY(-22px);
  width: 90%;
  height: 90%;
  font-size: 1rem;
  overflow-y: scroll;
  border: 4px solid ${Black};
  background-color: ${SecondaryColor};
  color: ${Black};
  z-index: 10;
  overflow-y:hidden;

  animation: ${move} 1s 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
const TitleCard = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 48px;
  font-weight: 600;
  transform: translateX( ${props => props.isWatch}% );
  transition: transform .5s ease-in-out;
  .title{
    width: 60%;
  }
`;
const TextCard = styled.p`
  width: 80%;
  margin: 0 auto .8em;
  transform: translateX( ${props => props.isWatch}% );
  transition: transform .5s ease-in-out;
  transition-delay: .2s;
`;

const Cta = styled.span`
  padding-right: 0.5em;
  color: ${BackgroundColor};
`


const CardsClick1 = ({setInfoCard, setOpenModal, setImageModal}) => {
  const [viewInfo, setViewInfo] = React.useState(false)
    return (
      <CardContainer onClick={()=> {
        setInfoCard(data.card1)
        setOpenModal(true)
        setImageModal(card1)
      }} >
        <ContainerImage index = {viewInfo ? 0 : 20}>
            <ImageCard src={card1} alt={data.card1.title} />
            <TitleCardContainer>
              <TitleCard>
                {data.card1.title}
                <Cta>
                  ver más <BsFillHandIndexFill/>
                </Cta>
              </TitleCard>
            </TitleCardContainer>
        </ContainerImage>

          <InfoContainer>
          </InfoContainer>
      </CardContainer>
    )
  }


  const CardsClick2 = ({setInfoCard, setOpenModal, setImageModal}) => {
    const [viewInfo, setViewInfo] = React.useState(false)
    
      return (
        <CardContainer onClick={()=> {
          setInfoCard(data.card2)
          setOpenModal(true)
          setImageModal(card2)
        }} >
          <ContainerImage index = {viewInfo ? 0 : 20}>
              <ImageCard src={card2} alt={data.card2.title} />
              <TitleCardContainer>
                <TitleCard>
                  <samp className='title'>
                    {data.card2.title}
                  </samp>
                  <Cta>
                    ver más <BsFillHandIndexFill/>
                  </Cta>
                </TitleCard>
              </TitleCardContainer>
          </ContainerImage>
  
          <InfoContainer>
              <TitleCard isWatch = {viewInfo ? 0 : -100}>{data.card2.title}</TitleCard>
              <TextCard isWatch = {viewInfo ? 0 : -100}>{data.card2.text}</TextCard>
              </InfoContainer>
        </CardContainer>
      )
    }
    const CardsClick3 = ({setInfoCard, setOpenModal, setImageModal}) =>{
      const [viewInfo, setViewInfo] = React.useState(false)
      
        return (
          <CardContainer onClick={()=> {
            setInfoCard(data.card3)
            setOpenModal(true)
            setImageModal(card3)
          }} >
            <ContainerImage index = {viewInfo ? 0 : 20}>
                <ImageCard src={card3} alt={data.card3.title} />
                <TitleCardContainer>
                  <TitleCard>
                    {data.card3.title}
                    <Cta>
                      ver más <BsFillHandIndexFill/>
                    </Cta>
                  </TitleCard>
                </TitleCardContainer>
            </ContainerImage>
    
              <InfoContainer>
              </InfoContainer>
          </CardContainer>
        )
      }
      const CardsClick4 = ({setInfoCard, setOpenModal, setImageModal}) => {
        const [viewInfo, setViewInfo] = React.useState(false)
        
          return (
            <CardContainer onClick={()=> {
              setInfoCard(data.card4)
              setOpenModal(true)
              setImageModal(card4)
            }} >
              <ContainerImage index = {viewInfo ? 0 : 20}>
                  <ImageCard src={card4} alt={data.card4.title} />
                  <TitleCardContainer>
                    <TitleCard>
                      {data.card4.title}
                      <Cta>
                        ver más <BsFillHandIndexFill/>
                      </Cta>
                    </TitleCard>
                  </TitleCardContainer>
              </ContainerImage>
      
                <InfoContainer>
                </InfoContainer>
            </CardContainer>
          )
        }
        const CardsClick5 = ({setInfoCard, setOpenModal, setImageModal}) => {
          const [viewInfo, setViewInfo] = React.useState(false)
          
            return (
              <CardContainer onClick={()=> {
                setInfoCard(data.card5)
                setOpenModal(true)
                setImageModal(card5)
              }} >
                <ContainerImage index = {viewInfo ? 0 : 20}>
                    <ImageCard src={card5} alt={data.card5.title} />
                    <TitleCardContainer>
                      <TitleCard>
                        {data.card5.title}
                        <Cta>
                          ver más <BsFillHandIndexFill/>
                        </Cta>
                      </TitleCard>
                    </TitleCardContainer>
                </ContainerImage>
        
                  <InfoContainer>
                  </InfoContainer>
              </CardContainer>
            )
          }
const CardsClick6 = ({setInfoCard, setOpenModal, setImageModal}) => {
  const [viewInfo, setViewInfo] = React.useState(false)
    return (
      <CardContainer onClick={()=> {
        setInfoCard(data.card6)
        setOpenModal(true)
        setImageModal(card6)
      }} >
        <ContainerImage index = {viewInfo ? 0 : 20}>
            <ImageCard src={card6} alt={data.card6.title} />
            <TitleCardContainer>
              <TitleCard>
                {data.card6.title}
                <Cta>
                  ver más <BsFillHandIndexFill/>
                </Cta>
              </TitleCard>
            </TitleCardContainer>
        </ContainerImage>

          <InfoContainer>
          </InfoContainer>
      </CardContainer>
    )
  }

export { CardsClick1, CardsClick2, CardsClick3, CardsClick4, CardsClick5, CardsClick6, }