import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
   BrowserRouter as Router,
   Route,
   Routes
} from 'react-router-dom';
import ScrollToTop from './components/elements/SkrollToTop';

import { store } from './app/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <ScrollToTop>
               <Routes>
                  <Route path='/' element={<App />} />
               </Routes>
            </ScrollToTop>
         </Router>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

