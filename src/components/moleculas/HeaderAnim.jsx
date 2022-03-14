import React from 'react'
import styled from 'styled-components'

import CloudImage from '../../assets/img/CloudImage';
import image from '../../assets/img/imageHeader.svg'

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 95vh;
    overflow: hidden;
    background-color: #FBB04B;
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background-color: #F47F6B;
    }
`
const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 20;
    padding-top: 3em;
`



function HeaderAnim() {
  return (
    <HeaderContainer>
        <CloudImage/>
        <Image src={image} />
    </HeaderContainer>
  )
}

export { HeaderAnim } 