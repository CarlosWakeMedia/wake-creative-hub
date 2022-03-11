import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './icons.css'
import slider1 from '../../assets/img/slider1.svg';
import slider2 from '../../assets/img/slider2.svg';
import slider3 from '../../assets/img/slider3.svg';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const ContainerCarrousel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const CarrouselImg = styled.img`
  max-width: 1000px;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarrouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  top: -8rem;
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0;
  z-index: 1;
  @media (min-width: 768px) {
    top: -12rem;
  }
  @media (min-width: 1024px) {
    top: -14rem;
  }
  @media (min-width: 1440px) {
    top: -14rem;
    width: 70%;
  }
`;
const Slider = () => {
  const images = [slider1, slider2, slider3]
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loader, setLoader] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectIndex, images)
      }, 2500);
      return () => clearInterval(interval)
    }
  },)

  const selectNewImage = (index, images, next = true) => {
    setLoader(false);
    setTimeout(() => {
      const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
      const newIndex = next
      ?  condition ? selectIndex + 1 : 0
      : condition ? selectIndex - 1 : images.length - 1;
      setSelectedImage(images[newIndex]);
      setSelectIndex(newIndex);
    }, 500);
  }

  const previous = () => {
    selectNewImage(selectIndex, images, false)
    setAutoPlay(false)
  };

  const next = () => {
    selectNewImage(selectIndex, images)
  }

  return (
    <ContainerCarrousel id='Home'>
      <CarrouselImg
        src={selectedImage}
        alt="Wake Creative Gub Presentation"
        className={loader ? 'loaded' : ''}
        onLoad={() => setLoader(true)}
      />
      <CarrouselButtonContainer>
        <IconContext.Provider value={{ className: 'iconSlider'}}>
          <AiFillCaretLeft onClick={previous} />
          <AiFillCaretRight onClick={next} />
        </IconContext.Provider>
      </CarrouselButtonContainer>
    </ContainerCarrousel>
  )
}

export { Slider };