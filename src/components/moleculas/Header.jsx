import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BiHome, BiBriefcaseAlt2 } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { SiGithubsponsors } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { IconContext } from "react-icons";
import { PrimaryColor, SecondaryColor } from "../../utils/constants";
import logo from "../../assets/img/logo.svg";
import "./icons.css";
import "../../index.css";

const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 100;
  /* padding-bottom: 1rem; */
  margin-bottom: 1em;
  top: 0;
  left: 0;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(244,127,107,0.1),
              0 2px 2px rgba(244,127,107,0.1),
              0 4px 4px rgba(244,127,107,0.1),
              0 8px 8px rgba(244,127,107,0.1),
              0 16px 16px rgba(244,127,107,0.1);
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 5rem;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 4rem;
  }
`;

const Logo = styled.img`
  width: 15%;
  max-width: 6em;
  height: auto;
  margin: 0.6rem;
  z-index: 10;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  width: 55px;
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
    width: 135px;

    &:before,
    ${SpanTitle} {
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
        <IconContext.Provider value={{ className: "Icons" }}>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <NavIcon>
              <SpanIcon>
                <BiHome />
              </SpanIcon>
              <SpanTitle>Home</SpanTitle>
            </NavIcon>
          </Link>
          <Link
            activeClass="active"
            to="Cards"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ref={React.createRef()}
          >
            <NavIcon>
              <SpanIcon>
                <MdOutlineComputer />
              </SpanIcon>
              <SpanTitle>Servicios</SpanTitle>
            </NavIcon>
          </Link>

          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ref={React.createRef()}
          >
            <NavIcon>
              <SpanIcon>
                <ImNewspaper />
              </SpanIcon>
              <SpanTitle>Acerca de</SpanTitle>
            </NavIcon>
          </Link>
          <Link
            activeClass="active"
            to="Portafolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ref={React.createRef()}
          >
            <NavIcon>
              <SpanIcon>
                <BiBriefcaseAlt2 />
              </SpanIcon>
              <SpanTitle>Portafolio</SpanTitle>
            </NavIcon>
          </Link>
          <Link
            activeClass="active"
            to="Clientes"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ref={React.createRef()}
          >
            <NavIcon>
              <SpanIcon>
                <SiGithubsponsors />
              </SpanIcon>
              <SpanTitle>Clientes</SpanTitle>
            </NavIcon>
          </Link>
          <NavIcon>
            <Link
              activeClass="active"
              to="Contacto"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              ref={React.createRef()}
            >
              <SpanIcon>
                <TiContacts />
              </SpanIcon>
              <SpanTitle>Contacto</SpanTitle>
            </Link>
          </NavIcon>
        </IconContext.Provider>
      </NavContainer>
    </HeaderContainer>
  );
};

export { Header };
