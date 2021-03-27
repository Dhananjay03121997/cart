import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Product } from './App';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <React.StrictMode>
    <div className= "block-1">
          <Product />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
