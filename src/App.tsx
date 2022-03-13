import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/headers/Headers';
import Info from './components/information/Info';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Info/>
    </div>
  );
}

export default App;
