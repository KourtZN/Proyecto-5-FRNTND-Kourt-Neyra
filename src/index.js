import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from 'react-router-dom'
import {Navigation} from './routes/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
