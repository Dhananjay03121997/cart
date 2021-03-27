import './App.css';
import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

function Product() {
    const [data, setUser] = useState([]);

    useEffect(() => {
      loadProducts();
    }, []);
  
    const loadProducts = async () => {
      const result = await axios.get("http://localhost:3003/product");
      setUser(result.data);
    };
  
    // const deleteUser = async id => {
    //   await axios.delete(`http://localhost:3003/users/${id}`);
    //   loadProducts();
    // };
    
    

  let arr = [], match;
  const [count, setCount] = useState([]);
//Add To Cart
  const addToCart = (product1, index) => {
     match = product1.id;
    let product={
      ...product1,
      index: index
    }
    arr.push(product);
    setCount(current=>[...current, arr]);
  }
  // const [product, setProduct] = useState([]);
  const getDataById = async (id) =>{
    const result = await axios.get(`http://localhost:3003/product/{id}`);
    //   setUser(result.data);
    // arr.push(id)
    // setProduct(current=>[...current, arr])
    console.log(result);
    const  state ={
      disabled: false
    }

    this.handlechange = (e)=>{
      this.setState({
        disabled: true
      })
    }
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
                          <th scope="col" className = "w-100">Name</th>
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
                            <button className="btn btn-primary" value={index} onClick={()=>addToCart(product, index)} 
                            disabled={ match == product.id}
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
                            {count.length}
                          </label>
                          </th></tr>
                        <tr>
                          <th className="col-lg-4">Name</th>
                          <th >Price</th>
                          <th className="col-lg-4">Operation</th>
                        </tr>
                          {count.map((item, index)=>{
                            return <tr key={index}>
                              <td >{item[0].name}</td>
                              <td >${item[0].price}</td>
                              <td>
                                <button className="btn-outline-primary btn-xs" onClick={()=>getDataById(item[0].id)}>-</button>
                                <input type="text" style={{width:"30px"}}/>
                                <button className="btn-xs btn-outline-secondary">+</button>
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
function Cart(s){
  return(
    <tr><td>cart</td></tr>
  )
}

// function 

export {Product, Cart, Example };