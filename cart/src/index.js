import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './App';
import reportWebVitals from './reportWebVitals';
// import {
//   Card, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, Col
// } from 'reactstrap';
import Table from 'react-bootstrap/Table'

ReactDOM.render(
  <React.StrictMode>
    <div className="justify-content-center">
      <div className="block-1">
        <Table cellPadding="10">
          <tbody>
            <tr><td>Products</td></tr>
            <Product />
          </tbody>
        </Table>
      </div>
      <div>
        <div>

        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
