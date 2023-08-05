import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './18n/18n.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
  <App />
  </Suspense>
  </BrowserRouter>
);