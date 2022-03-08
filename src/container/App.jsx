import React from 'react';
import Briefcase from '../components/moleculas/Briefcase';
import { CardSecction } from '../components/moleculas/CardSecction';
import {AboutSecction} from '../components/moleculas/AboutSecction'


function App() {
  return (
    <React.Fragment >
      <CardSecction />
      <AboutSecction/>
      <Briefcase />
    </React.Fragment>
  );
}

export default App;
