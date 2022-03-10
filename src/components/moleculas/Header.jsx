import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { BiHome, BiBriefcaseAlt2 } from 'react-icons/bi';
import { MdOutlineComputer } from 'react-icons/md';
import { ImNewspaper } from 'react-icons/im';
import { SiGithubsponsors } from 'react-icons/si';
import { TiContacts } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { PrimaryColor, SecondaryColor } from '../../utils/constants';
import logo from '../../assets/img/logowakemedia.png';
import './icons.css';


const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 8rem;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 8rem;
  }
`;

const Logo = styled.img`
  width: 45%;
  height: auto;
  margin: 0.6rem;
  @media (min-width: 768px) {
    margin: 1rem;
    width: 25%;
  }
  @media (min-width: 1024px) {
    margin: 1rem;
    width: 35%;
  }
  @media (min-width: 1440px) {
    margin: 1rem;
    width: 20%;
    height: 7rem;
  }
`;

const NavContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
  align-items: center;
  gap: 1rem;
	border-radius: 20px 20px;
	box-shadow: 0 10px 25px 0 rgba(#000, 0.075);
	background-color: ${PrimaryColor};
  @media (min-width: 768px) {
    margin: 1rem;
    gap: 0;
  }
  @media (min-width: 1440px) {
    margin: 1rem;
    width: 50%;
  }
`;


const SpanTitle = styled.span`
  transform: translateX(100%);
	transition: transform 0.2s ease-in;
	transform-origin: center right;
	display: block;
	text-align: center;
	text-indent: 28px;
	width: 100%;
`;

const NavIcon = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 70px;
	height: 50px;
	border-radius: 99em;
	position: relative;
	z-index: 1;
	overflow: hidden;
	transform-origin: center left;
	transition: width 0.2s ease-in;
	text-decoration: none;
	color: white;
  cursor: pointer;
	&:before {
		position: absolute;
		z-index: -1;
		content: "";
		display: block;
		border-radius: 99em;
		width: 100%;
		height: 100%;
		top: 0;
		transform: translateX(100%);
		transition: transform 0.2s ease-in;
		transform-origin: center right;
		background-color: ${SecondaryColor};
	}
  &:hover,
	&:focus {
		outline: 0;
		width: 235px;

		&:before, ${SpanTitle} {
			transform: translateX(0);
			opacity: 1;
		}
	}
  @media (min-width: 768px) {
    &:hover,
    &:focus {
      outline: 0;
      width: 135px;
    }
  }
    @media (min-width: 1024px) {
      &:hover,
    &:focus {
      outline: 0;
      width: 160px;
    }
  }
`;

const SpanIcon = styled.span`
  width: 35px;
	height: 28px;
	display: block;
	flex-shrink: 0;
	left: 18px;
	position: absolute;
`;



const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo de wake creative hub" />
      <NavContainer>
        <IconContext.Provider value={{ className: 'Icons' }}>
          <Link
            to='Home'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <NavIcon>
            <SpanIcon>
              <BiHome/>
            </SpanIcon>
              <SpanTitle >Home</SpanTitle>
              </NavIcon>
          </Link>
          <Link
            to='Cards'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          ><NavIcon>
          <SpanIcon>
            <MdOutlineComputer/>
          </SpanIcon>
          <SpanTitle>Servicios</SpanTitle>
          </NavIcon>
          </Link>
          <Link
            to='About'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <NavIcon>
          <SpanIcon>
            <ImNewspaper/>
          </SpanIcon>
              <SpanTitle>Acerca de</SpanTitle>
              </NavIcon>
          </Link>
          <Link
            to='Portafolio'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <NavIcon>
          <SpanIcon>
            <BiBriefcaseAlt2/>
          </SpanIcon>
              <SpanTitle>Portafolio</SpanTitle>
              </NavIcon>
          </Link>
          <Link
            to='Clientes'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <NavIcon>
          <SpanIcon>
            <SiGithubsponsors/>
          </SpanIcon>
              <SpanTitle>Clientes</SpanTitle>
              </NavIcon>
          </Link>
          <Link
            to='Contacto'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <NavIcon>
          <SpanIcon>
            <TiContacts/>
          </SpanIcon>
              <SpanTitle>Contacto</SpanTitle>
              </NavIcon>
            </Link>
          </IconContext.Provider>
        </NavContainer>
      </HeaderContainer>
  );
}

export { Header };