import React from 'react'
import styled from 'styled-components';

import CloudImage from '../../assets/img/CloudImage';
import ImageHeader from '../../assets/img/imageHeader';
import { Black} from '../../utils/constants';

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    padding-top: 12em;
    background-color: #FBB04B;
`

function HeaderAnim() {
  return (
    <HeaderContainer>
        <CloudImage/>
        <ImageHeader colorText={Black}/>
    </HeaderContainer>
  )
}

export { HeaderAnim }