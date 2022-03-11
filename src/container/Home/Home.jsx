import React from 'react'
import styled from 'styled-components';
import { Header } from '../../components/moleculas/Header.jsx';
import { Slider } from '../../components/moleculas/Slider.jsx';
import { PrimaryColor } from '../../utils/constants.jsx';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${PrimaryColor};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Slider/>
    </HomeContainer>
  )
}

export { Home };