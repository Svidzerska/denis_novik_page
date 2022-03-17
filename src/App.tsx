import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/headers/Headers';
import Info from './components/information/Info';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import { BrowserRouter, RouterProps, Route, RouteProps, Routes, Outlet} from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
        <div className="App">
           <Routes>
              <Route path='/' element={<Layout />}>
                 <Route path='/' element ={<Headers/>} />
                 <Route path='/headers' element ={<Headers/>} />
                 <Route path='/info' element ={<Info/>} />
                 <Route path='/skills' element ={<Skills/>} />
                 <Route path='/portfolio' element ={<Portfolio/>} />
                 <Route path='/footer' element ={<Footer/>} />
              </Route>
           </Routes>
        </div>
      </BrowserRouter>
  );
}


function Layout() {
   return (
     <div>
       <main>
         <Outlet />
       </main>
     </div>
   );
}

export default App;
