import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/SegoePrint/SegoePrint.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Oswald/Oswald-Medium.ttf';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
