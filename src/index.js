import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Product, Cart } from './App';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <React.StrictMode>
    <div className= "block-1">
      <div className= "card">
        <div className = "card-body">
          <Product />
        </div>
      </div>
      <div>
      <div className="cart card">
        <table cellPadding="10">
          <tbody>
            <tr><td>Products</td></tr>
            <Cart />
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
