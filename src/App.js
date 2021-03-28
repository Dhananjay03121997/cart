import './App.css';
import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import products from './data/data.json';
import axios from 'axios'

let data = products.product;
function Product() {
  let arr = [], totalVal = 0;
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
 
  //ADDING ITEM TO BASKET/CART
  function handleClick(e) {
    e.target.disabled = true
    e.target.className ="btn btn-secondary";
    let i = e.target.attributes[1].value;
    let product={
      name:data[i].name,
      price: data[i].price,
      quantity: data[i].quantity,
      requirement: 1,
      item_total: data[i].price * 1,
    }
    if (data[i].name == "cheese" || data[i].name == "Cheese") {
      product.requirement = 2;
      product.item_total= product.price * 2;
    }
    arr.push(product);
    setCart(current=>[...current, arr]);
}

useEffect(() => {
  countTotal();
}, [cart]);

  const countTotal=()=>{
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i][0].item_total;
    }
    setTotal(totalVal);
  }
    function onClick(e){
      let i = e.target.value, add = 1, count = 1;
      cart[i][0].name == "Cheese" ? add = 2 : add = 1;
      
    if(e.target.name == "add"){
      cart[i][0].requirement = cart[i][0].requirement + add;
      cart[i][0].item_total = cart[i][0].price * cart[i][0].requirement;
  }
  if(e.target.name == "less"){
      cart[i][0].requirement = cart[i][0].requirement - add;
      cart[i][0].item_total = cart[i][0].requirement * cart[i][0].price;
  }
  let totalVal = 0;
  for (let i = 0; i < cart.length; i++) {
    totalVal += cart[i][0].item_total;
  }
  setTotal(totalVal);
    }
  return (
    <div className="container">
      <div className="Crud"></div>
        <div className="row">
            <div className="col-lg-5 mb-3">
                <div className="card">
                    <div className="card-body">
                    <table className="table" cellPadding="10" cellSpacing="10">
                      <thead>
                        <tr><th colSpan="3">Products</th></tr>
                        <tr>
                          <th scope="col-lg-4" className = "w-100">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((product, index)=>{
                        if(product.quantity>0){
                        return <tr key={index}>
                          <td>{product.name}</td>
                          <td>${product.price}</td>
                          <td>
                            <button className="btn btn-primary" value={index} key={index} onClick={handleClick}>
                              Add
                            </button></td>
                          </tr>}
                      })
                    }
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 mb-3">
                <div className="card">
                    <div className="card-body">
                    <table className="table" cellPadding="10" cellSpacing="5">
                      <thead>
                        <tr>
                          <th colSpan="3">Basket 
                          <label className="btn-xs btn-outline-primary disabled ml-2 mr-2 border p-2">
                            {cart.length}
                          </label>
                          </th></tr>
                        <tr>
                          <th >Name</th>
                          <th >Price</th>
                          <th >Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                          {cart.map((item, index)=>{
                            return<tr key={index}>
                              <td >{item[0].name}</td>
                              <td >${item[0].price}</td>
                              <tr>
                              <td className = "col-lg-4 ">
                                <button name="less" className="btn-outline-primary btn-xs" value={index} onClick={onClick} disabled={item[0].requirement == 1}>-</button>
                                <input type="text" style={{width:"30px"}} value={item[0].requirement}/>
                                <button name="add" className="btn-xs btn-outline-secondary" value={index} onClick={onClick} disabled={item[0].requirement == item[0].quantity}>+</button>
                                </td>
                                </tr>
                                <tr className="text-right">item price {item[0].price} * {item[0].requirement} = {item[0].item_total.toFixed(2)}</tr>
                                <tr className="font-weight-bolder"><td>Item Cost ${item[0].item_total.toFixed(2)}</td></tr>
                                </tr>
                                
                          })
                          }
                           <tr className="font-weight-bolder"><td></td><td >Total</td><td>${total == 0 ? total : total.toFixed(2)}</td></tr>
                          
                            
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// function 

export {Product };