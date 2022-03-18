import React from 'react';
import styled, {keyframes} from 'styled-components';
import { BsFillHandIndexFill } from "react-icons/bs";

import branding from '../../assets/img/card__branding.svg';
import contend from '../../assets/img/card__contend.svg';
import creative from '../../assets/img/card__creative.svg';
import dataAnalitycs from '../../assets/img/card__data.svg';
import presence from '../../assets/img/card__presence.svg';
import strategy from '../../assets/img/card__strategy.svg';

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
  z-index: 20;
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
    return (
      <CardContainer onClick={()=> {
        setInfoCard(data.card1)
        setOpenModal(true)
        setImageModal(branding)
      }} >
        <ContainerImage>
            <ImageCard src={branding} alt={data.card1.title} />
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
      return (
        <CardContainer onClick={()=> {
          setInfoCard(data.card2)
          setOpenModal(true)
          setImageModal(creative)
        }} >
          <ContainerImage>
              <ImageCard src={creative} alt={data.card2.title} />
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
              <TitleCard >{data.card2.title}</TitleCard>
              <TextCard >{data.card2.text}</TextCard>
              </InfoContainer>
        </CardContainer>
      )
    }
    const CardsClick3 = ({setInfoCard, setOpenModal, setImageModal}) =>{
  
      
        return (
          <CardContainer onClick={()=> {
            setInfoCard(data.card3)
            setOpenModal(true)
            setImageModal(presence)
          }} >
            <ContainerImage>
                <ImageCard src={presence} alt={data.card3.title} />
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
          return (
            <CardContainer onClick={()=> {
              setInfoCard(data.card4)
              setOpenModal(true)
              setImageModal(contend)
            }} >
              <ContainerImage>
                  <ImageCard src={contend} alt={data.card4.title} />
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
          
            return (
              <CardContainer onClick={()=> {
                setInfoCard(data.card5)
                setOpenModal(true)
                setImageModal(strategy)
              }} >
                <ContainerImage>
                    <ImageCard src={strategy} alt={data.card5.title} />
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
    return (
      <CardContainer onClick={()=> {
        setInfoCard(data.card6)
        setOpenModal(true)
        setImageModal(dataAnalitycs)
      }} >
        <ContainerImage>
            <ImageCard src={dataAnalitycs} alt={data.card6.title} />
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