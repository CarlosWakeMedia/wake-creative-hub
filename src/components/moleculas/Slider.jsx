import React from 'react';
import styled from 'styled-components';
import slid1 from '../../assets/img/Presentación 1.png'
import slid2 from '../../assets/img/Slider 1.png';
import slid3 from '../../assets/img/Slider 2.png';
import { PrimaryColor } from '../../utils/constants';

const SliderContainer = styled.div`
  width: 100%;
  height: auto;
  background-color:${PrimaryColor};
`;

const Carrousel = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CarrouselList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Imagen = styled.img`
  width: 100%;
  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const Slider = () => {
  return (
    <SliderContainer>
      <Carrousel>
        <CarrouselList>
          <Imagen src={slid1} alt="" />
          <Imagen src={slid2} alt="" />
          <Imagen src={slid3} alt="" />
        </CarrouselList>
      </Carrousel>
    </SliderContainer>
  )
}

export { Slider };