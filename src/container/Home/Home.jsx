import React from 'react'
import styled from 'styled-components';
import { Header } from '../../components/moleculas/Header.jsx';
import { HeaderAnim } from '../../components/moleculas/HeaderAnim.jsx';
import { Slider } from '../../components/moleculas/Slider.jsx';
import { PrimaryColor } from '../../utils/constants.jsx';

const HomeContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${PrimaryColor};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      {/* <Slider/> */}
      <HeaderAnim/>
    </HomeContainer>
  )
}

export { Home };