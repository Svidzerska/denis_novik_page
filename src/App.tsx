import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/headers/Headers';
import Info from './components/information/Info';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';


function App() {
   return (
         <div className="App">
            <Headers />
            <Info />
            <Skills />
            <Portfolio />
            <Footer />
         </div>
   );
}


export default App;
