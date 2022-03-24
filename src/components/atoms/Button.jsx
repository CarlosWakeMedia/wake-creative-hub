import React from 'react';
import styled from 'styled-components';
import {BackgroundColor, Black, TextColor} from '../../utils/constants'

const ButtonPrimary = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: white;
  color: ${TextColor};
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid ${Black};
  text-decoration: none;
  cursor:pointer;
  transition:all .3s;
  &:hover {
    background-color: ${BackgroundColor};
    color: white;
    border: 1px solid white;
  }
  span{
    margin-right: .8em;
  }
`;

const Button = ({value, href, download}) => {
  return (
    <ButtonPrimary href={href} download={download} target="_blank" rel="noopener noreferrer">
      {value}
    </ButtonPrimary>
  )
}

export { Button };