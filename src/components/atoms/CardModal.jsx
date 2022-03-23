import React from 'react'
import styled from 'styled-components'
import { White, Black, SecondaryColor } from '../../utils/constants'
import { BiX } from "react-icons/bi";

const CardModalContainer=styled.article`
    display: grid;
    grid-template-areas: 
        "btnC"
        "title"
        "p"
        "list"
        "img"
    ;
        grid-template-columns: 100%;
        grid-template-rows: 2em repeat(4, auto);
        gap: 2.5rem;
    width: 80%;
    max-width: 1500px;
    min-width: 310px;
    margin: 2em auto;
    height: auto;
    z-index: 1500;
    background-color: ${White};
    color: ${Black};
    border: 4px solid ${Black};
    @media (min-width: 1024px) {
        grid-template-areas: 
        "btnC   btnC"
        "img    title"
        "img    p"
        "img    list"
    ;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3.75em repeat(3, auto);
        margin: 10vh auto;
    }
`
const ButtonContainer=styled.div`
    display: flex;
    flex-direction: row-reverse;
    grid-area: btnC;
    width: 100%;
    height: 100%;
    border-bottom: 4px solid ${Black};
`
const ButtonClose=styled.button`
    height: 100%;
    width: 60px;
    font-size: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        background: ${SecondaryColor};
    }
`
const Image=styled.img`
    grid-area: img;
`
const Title=styled.h3`
    grid-area: title;
    font-size: 2rem;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0.2px;
    margin-left: 1em;
    @media (min-width: 600px) {
        font-size: 3rem;
    }
`
const Text=styled.p`
    grid-area: p;
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
    width: 90%;
    margin-left: 1em;
    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`
const List=styled.ul`
    grid-area: list;
    padding: 0 0 2em 2em;
    width: 90%;
    margin-left: 1em;
`
const ListItem=styled.li`
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`

const CardModal = ({setOpenModal, image, data}) => {
  return (
    <CardModalContainer>
        <ButtonContainer>
            <ButtonClose onClick={()=> setOpenModal(false)}>
               <BiX/>
            </ButtonClose>
        </ButtonContainer>
        <Image src={image}/>

        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
        <List>
            {data.puntos.map(item => (
                <ListItem key={item}>
                  {item}
                </ListItem>
            ))}
        </List>
    </CardModalContainer>
  )
}

export { CardModal }