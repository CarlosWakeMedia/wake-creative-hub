import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { Black, PrimaryColor, White, SecondaryColor} from "../../utils/constants";
import logo from "../../assets/img/logo.svg";


const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: ${PrimaryColor};
  z-index: 100;
  @media (min-width: 1024px) {
    width: 100%;
    height: 5rem;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 1px rgba(244,127,107,0.1),
              0 2px 2px rgba(244,127,107,0.1),
              0 4px 4px rgba(244,127,107,0.1),
              0 8px 8px rgba(244,127,107,0.1),
              0 16px 16px rgba(244,127,107,0.1);
    ul{
        flex-direction: row;
    }
  }
`;

const Logo = styled.img`
  max-width: 5em;
  height: auto;
  margin: 0.6rem;
`;
const MenuContainer = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 950px;
    height: auto;
    @media (min-width: 1024px) {
        position: static;
        width: 70%;
        height: 100%;
    }
`
const Menu = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(${props => props.isOpen}%);
    transition: transform .3s;

    font-size: 1.5rem;
    list-style: none;
    color: ${Black};
    background-color: ${White};
    & li a{
        text-decoration: none;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 27px;
    }
    li a:hover{
        font-weight: 600;
    }
    li{
        padding: 1em;
        margin: 0 auto;
        margin-bottom: 1em;
        list-style:none;
    }
    @media (min-width: 1024px) {
        position: static;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: end;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        transform: translateX(0);
        background-color: transparent;
        color: ${Black};
        & li a{
            font-size: 1.125rem;
        }
    }
`;
const ContainerIcon = styled.div`
    width: auto;
    height: 5em;
    cursor: pointer;
`
const IconMenu = styled.div`
    position: relative;
    width: 3em;
    height: .5em;
    background-color: ${Black};
    margin: 1em;
    margin-top: 2em;
    z-index: 50;
    &::after,
    &::before{
        content: '';
        display: inline-block;
        position: absolute;
        width: 3em;
        height: .5em;
        background-color: ${Black};
        transition: transform .3s;
    }
    &::before{
        top: .8em;
    }
    &::after{
        top: 1.6em;
    }
    @media (min-width: 1024px) {
        display: none;
    }
    ${props => props.isOpen && css`
        background-color: transparent;
        &::before{
            left: 0;
            top: 25px;
            width: 100%;
            background-color: ${Black};
            transform: rotate(-45deg);
        }
        &::after{
            top: 25px;
            left: 0;
            margin-left: 0;
            width: 100%;
            background-color: ${Black};
            transform: rotate(45deg);
        }
    `}
`

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo de wake creative hub" />
      <ContainerIcon onClick={()=> setOpenMenu(!openMenu)} >
        <IconMenu isOpen={ openMenu }/>
      </ContainerIcon>
      <MenuContainer>
          <Menu isOpen = {()=> !!openMenu ? 0 : 100 }>
              <li>
                <Link 
                    onClick={()=> setOpenMenu(!openMenu)}     
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={600}
                    >
                        Inicio
                </Link>
              </li>
              <li>
                <Link 
                    onClick={()=> setOpenMenu(!openMenu)}     
                    to="Cards"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Servicios
                </Link>
              </li>
              <li>
                <Link 
                    onClick={()=> setOpenMenu(!openMenu)}     
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Acerca de
                </Link>
              </li>
              <li>
                    <Link 
                        onClick={()=> setOpenMenu(!openMenu)}     
                        to="Portafolio"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Portafolio
                    </Link>
              </li>
              <li>
                    <Link 
                        onClick={()=> setOpenMenu(!openMenu)}     
                        to="Clientes"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Clientes
                    </Link>
              </li>
              <li>
                    <Link 
                        onClick={()=> setOpenMenu(!openMenu)}     
                        to="Contacto"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={700}
                    >
                        Contacto
                    </Link>
              </li>
          </Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export { Navbar };
