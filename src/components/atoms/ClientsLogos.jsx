import React from 'react'
import styled from 'styled-components'

import dockers from '../../assets/img/clientes_dockers.svg'
import ficha from '../../assets/img/clientes_ficha.svg'
import infonavit from '../../assets/img/clientes_infonavit.svg'
import maggie from '../../assets/img/clientes_maggie.svg'
import patio from '../../assets/img/clientes_patio.svg'
import rivero from '../../assets/img/clientes_rivero.svg'
import roca from '../../assets/img/clientes_roca.svg'
import sanJorge from '../../assets/img/clientes_san-jorge.svg'
import sico from '../../assets/img/clientes_sico.svg'
import tangamanga from '../../assets/img/clientes_tangamanga.svg'
import vectorAnalisis from '../../assets/img/clientes_vector-analisis.svg'
import vectorCB from '../../assets/img/clientes_vector-cb.svg'
import yoplait from '../../assets/img/clientes_yoplait.svg'

const logosImages = [dockers, ficha, infonavit, maggie, 
                    patio, rivero, roca, sanJorge, sico, 
                    tangamanga, vectorAnalisis, vectorCB, 
                    yoplait]


const LogoContainer = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(6em, 3em));
	grid-gap: 3em;
    padding: 2em;
    justify-content: center;
    max-width: 700px;
`
const Logo = styled.img`
    width: 100%;
    height: auto;
`
const ClientsLogos = () => {
  return (
    <LogoContainer>


    {logosImages.map(item => (
        <Logo
          key={logosImages}
          src={item}
        />
    ))}
    </LogoContainer>
  )
}

export { ClientsLogos }