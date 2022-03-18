import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex; 
  justify-content: center;
  align-items: baseline;
  overflow-y: auto;
  z-index: 1000;
`
const ModalBackground = styled.div`
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: rgba(49, 48, 46, 0.65);
    z-index: 100;
`

const Modal = ({setOpenModal,children}) =>{

    return ReactDom.createPortal(
        <ModalContainer
            className="Modal"
        >
            <ModalBackground 
                className="ModalBackground"
                onClick={ ()=> setOpenModal(false) }
                >
            </ModalBackground>
            {children}
        </ModalContainer>,
        document.getElementById('modal')
    )
}

export {Modal}