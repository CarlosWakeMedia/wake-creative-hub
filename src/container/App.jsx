import React from 'react';
import Briefcase from '../components/moleculas/Briefcase';
import { CardSecction } from '../components/moleculas/CardSecction';
import { AboutSecction } from '../components/moleculas/AboutSecction'
import { Formulario } from '../components/moleculas/Formulario';
import { ClientsSection } from '../components/moleculas/ClientsSection';
import { Home } from '../container/Home/Home';

import { Modal } from '../components/atoms/Modal'
import { CardModal } from '../components/atoms/CardModal'


function App() {
  const [openModal, setOpenModal] = React.useState(false)
  const [infoCard, setInfoCard] = React.useState({})
  const [imageModal, setImageModal] = React.useState(null)

  

  React.useEffect(()=>{
    if(openModal){
      document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }
  },[openModal])
  
  return (
    <React.Fragment >
      <Home/>
      <CardSecction 
        setInfoCard={setInfoCard}
        setOpenModal={setOpenModal}
        setImageModal={setImageModal}
      />
      {openModal && (
          <Modal
              setOpenModal = {setOpenModal}
          >
              <CardModal 
                setOpenModal = {setOpenModal}
                data={infoCard}
                image={imageModal}
              />
          </Modal>
      )}

      <AboutSecction/>
      <Briefcase />
      <ClientsSection/>
      <Formulario/>
    </React.Fragment>
  );
}

export default App;
