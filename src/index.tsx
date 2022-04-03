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
import './i18n';
import { Suspense } from 'react';



ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
      <Suspense fallback="...is loading">
         <Router>
            <ScrollToTop>
               <Routes>
                  <Route path='/' element={<App />} />
               </Routes>
            </ScrollToTop>
         </Router>
      </Suspense>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

