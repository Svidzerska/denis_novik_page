import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/headers/Headers';
import Info from './components/information/Info';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Info/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
