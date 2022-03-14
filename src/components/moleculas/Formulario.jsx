import React from 'react'
import styled from 'styled-components';
import { BackgroundColor } from '../../utils/constants'
import { Title, Text } from './Briefcase';
import { IconContext } from "react-icons";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import '../moleculas/icons.css';


const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: ${BackgroundColor};
  color: white;
  text-align: center;
  padding: 2rem 0;
  overflow:hidden;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width:90%;
  height:28rem;
  background:#e6e6e6;
  border-radius: 30px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
  margin:4rem auto ;
  padding:20px 30px;
  box-sizing:border-box;
  position:relative;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 70%;
    height:30rem;
  }
  @media (min-width: 1400px) {
    width: 55%;
    height:28rem;
  }
`;

const SubTitle = styled.h2`
  margin:10px 0;
  padding-bottom:10px;
  width:14rem;
  color:${BackgroundColor};
  border-bottom:3px solid ${BackgroundColor};
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  box-sizing:border-box;
  background:none;
  outline:none;
  resize:none;
  border:0;
  transition:all .3s;
  border-bottom:2px solid ${BackgroundColor};
  :focus {
    border-bottom:2px solid ${BackgroundColor};
    }
`;

const SubText = styled(Text)`
text-align: start;
  ::before {
    content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:14px;
    color:${BackgroundColor};
  }
`;

const FormButton = styled.button`
  float:right;
  padding:8px 12px;
  margin:0 0 1rem 0;
  border:2px solid ${BackgroundColor};
  border-radius: 20px;
  background:0;
  color:${BackgroundColor};
  cursor:pointer;
  transition:all .3s;
  :hover{
    background:${BackgroundColor};
    color:#fff
  }
`;

const InfoContainer = styled.div`
  content:'Hi';
  position:absolute;
  bottom:-15px;
  right:-20px;
  background:${BackgroundColor};
  color:#fff;
  width:320px;
  padding:16px 4px 16px 0;
  border-radius:6px;
  font-size:13px;
  border-radius: 30px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.1),
              0 8px 8px rgba(0,0,0,0.1),
              0 16px 16px rgba(0,0,0,0.1);
`;
const Span = styled.span`
  margin:0 5px 0 15px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (min-width: 1400px) {
    gap: 4rem;
  }
`;

const SocialLinks = styled.a`
  width: auto;
  height: auto;
  svg{
    margin: 10px;
  }
`;

const Formulario = () => {
  return (
    <Container id='Contacto'>
      <Title>Contactanos</Title>
      <Text>Estamos listos para ayudarte a cumplir tus sueños, envianos un email!!</Text>
      <FormContainer>
      <Form >
        <SubTitle>Wake Creative Hub</SubTitle>
        <SubText type="Nombre:"><Input placeholder="Escribe tu nombre aqui.."></Input></SubText>
        <SubText type="Email:"><Input placeholder="Dejanos saber como contactarte.."></Input></SubText>
        <SubText type="Message:"><Input placeholder="Cuentanos como podemos ayudarte..."></Input></SubText>
        <FormButton>Enviar Correo</FormButton>
        <InfoContainer>
          <Span ></Span>(+52) 98-76-65-43
          <Span ></Span> creativeHub@wakemedia.mx
        </InfoContainer>
      </Form>
        <SocialMediaContainer>
          <IconContext.Provider value={{className: 'socialIcons'}}>
            <SocialLinks target={'_blank'} href="https://twitter.com/wakemediamx/"><BsTwitter/></SocialLinks>
            <SocialLinks target={'_blank'} href="https://www.facebook.com/wakemediamx"><BsFacebook/></SocialLinks>
            <SocialLinks target={'_blank'} href="https://www.instagram.com/wakemediamx/"><BsInstagram/></SocialLinks>
            <SocialLinks target={'_blank'} href="https://www.youtube.com/channel/UCTSjrpiqFppsUlySMZ-LqZQ"><BsYoutube/></SocialLinks>
          </IconContext.Provider>
        </SocialMediaContainer>
      </FormContainer>
    </Container>
  )
}

export { Formulario };