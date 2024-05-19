import React from 'react';
import './App.css';
import { AboutCard } from './components/About';
import { ContactCard } from './components/Contact';
import { ExperienceCard } from './components/Experience';
import { Navbar } from './components/navbar/Navbar';
import { Background } from './components/background/Background';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="front">
        <section id="About"><AboutCard/>
      <Background /></section>      
        <section id="Expirience"><ExperienceCard /></section>
        <section id="Contact"><ContactCard /></section>
      </div>
    </div>
  );
}

export default App;
