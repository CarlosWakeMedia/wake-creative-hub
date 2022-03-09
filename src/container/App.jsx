import React from 'react';
import Briefcase from '../components/moleculas/Briefcase';
import { CardSecction } from '../components/moleculas/CardSecction';
import { AboutSecction } from '../components/moleculas/AboutSecction'
import { Formulario } from '../components/moleculas/Formulario';


function App() {
  return (
    <React.Fragment >
      <CardSecction />
      <AboutSecction/>
      <Briefcase />
      <Formulario/>
    </React.Fragment>
  );
}

export default App;
