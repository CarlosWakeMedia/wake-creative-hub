import React from 'react';
import styled from 'styled-components';
import {BackgroundColor} from '../../utils/constants'

const ButtonPrimary = styled.a`
  padding: 1rem;
  border-radius: 35px;
  background-color: white;
  color: ${BackgroundColor};
  font-size: 1rem;
  border: 1px solid ${BackgroundColor};
  text-decoration: none;
  cursor:pointer;
  transition:all .3s;
  &:hover {
    background-color: ${BackgroundColor};
    color: white;
    border: 1px solid white;
  }
`;

const Button = ({value, href, download}) => {
  return (
    <ButtonPrimary href={href} download={download}>
      {value}
    </ButtonPrimary>
  )
}

export { Button };