import React from 'react'
import styled from 'styled-components';
import { Navbar } from '../../components/atoms/Navbar.jsx';
import { HeaderAnim } from '../../components/moleculas/HeaderAnim.jsx';
import { PrimaryColor } from '../../utils/constants.jsx';

const HomeContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  min-height: auto;
  max-height: 1350px;
  overflow: hidden;
  background-color: ${PrimaryColor};
  @media (min-width: 1200px) {
    min-height: 580px;
  }
`;

const Home = () => {
  return (
    <HomeContainer id='Home'>
      <Navbar/>
      <HeaderAnim/>
    </HomeContainer>
  )
}

export { Home };