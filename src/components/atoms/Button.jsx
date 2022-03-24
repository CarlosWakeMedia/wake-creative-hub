import React from 'react';
import styled, { css } from 'styled-components';
import {BackgroundColor, Black, TextColor, White} from '../../utils/constants'
import { InfoContainer } from './CardsClick';

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  cursor: pointer;
`

const ButtonPrimary = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: white;
  color: ${TextColor};
  font-size: 1.2rem;
  font-weight: 700;
  border: 4px solid ${Black};
  text-decoration: none;
  transition:all .3s;
  z-index: 20;
  ${ props=> props.isHover && css`
    background-color: ${BackgroundColor};
    color: white;
    border-color: ${White};
  `}
  span{
    margin-right: .8em;
  }
`;

const Border = styled(InfoContainer)`
  width: 100%;
  transform: translateY(-28px);
  ${ props=> props.isHover && css`
    background-color: transparent;
    border-color: ${White};
  `}
`

const Button = ({value, href}) => {
  const [hover, setHover] = React.useState(false)
  return (
    <ButtonContainer
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >

      <ButtonPrimary 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        isHover={ hover }
      >
        {value}
      </ButtonPrimary>

      <Border isHover={ hover }/>
    </ButtonContainer>
  )
}

export { Button };