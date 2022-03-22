import React from 'react'
import styled from 'styled-components';
import { Header } from '../../components/moleculas/Header.jsx';
import { HeaderAnim } from '../../components/moleculas/HeaderAnim.jsx';
import { PrimaryColor } from '../../utils/constants.jsx';

const HomeContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 1350px;
  overflow: hidden;
  background-color: ${PrimaryColor};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HeaderAnim/>
    </HomeContainer>
  )
}

export { Home };