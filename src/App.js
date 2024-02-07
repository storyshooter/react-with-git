import React from 'react';
import NavBar from './components/NavBar/navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { originals, action, Comedy } from './url';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={action} title="Netflix originals" />
      <Rowpost url={originals} title="Actions" isSmall />
      <Rowpost url={Comedy} title="Comedy" isSmall />
      <Footer /> 
    </div>
  );
}

export default App;
