import './App.css';
import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import products from './data/data.json';
import axios from 'axios'

let data = products.product;
function Product() {
    // const [data, setProductData] = useState([]);

    // useEffect(() => {
    //   loadProducts();
    // }, []);
  
    // const loadProducts = async () => {
    //   const result = await axios.get("http://localhost:3003/product");
    //   setProductData(result.data);
    // };      NOT WORKING AFTER PUSHED ON HEROKU APP

  let arr = [];
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  function handleClick(e) {
    e.target.disabled = true
    let i = e.target.attributes[1].value;
    let product={
      name:data[i].name,
      price: data[i].price,
      quantity: data[i].quantity,
      requirement: 1
    }
    arr.push(product);
    setCart(current=>[...current, arr]);
  }


    function onClick(e){
      let i = e.target.value
      let item = cart[i];
    if(e.target.name == "add"){
      cart[i][0].requirement = cart[i][0].requirement + 1;
    
  }
  if(e.target.name == "less"){
      cart[i][0].requirement = cart[i][0].requirement - 1;
  }
    setQuantity(current =>[...current , cart[i][0].requirement]);
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
                            <button className="btn btn-primary" value={index} key={index} onClick={handleClick} 
                              >
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
                          {cart.map((item, index)=>{
                            return <tr key={index}>
                              <td >{item[0].name}</td>
                              <td >${item[0].price}</td>
                              <td className="d-inline">
                                <button name="less" className="btn-outline-primary btn-xs" value={index} onClick={onClick} disabled={item[0].requirement == 1}>-</button>
                                <input type="text" style={{width:"30px"}} value={item[0].requirement}/>
                                <button name="add" className="btn-xs btn-outline-secondary add" value={index} onClick={onClick} disabled={item[0].requirement == item[0].quantity}>+</button>
                                </td>
                                </tr>
                          })
                          }
                      </thead>
                      <tbody>
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