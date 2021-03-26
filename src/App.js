import './App.css';
import data from './data/data.json';
// import setList from './data/cart.json';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function Product() {
  let arr = [];
  const [count, setCount] = useState([]);
  // const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    arr.push(product);
    setCount(arr);
    
  }
  return (
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-3">
                <div class="card">
                    <div class="card-body">
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
                      {data.product.map((product, index)=>{
                        return <tr key={index}><td>{product.name}</td><td>${product.price}</td><td><button className="btn btn-primary" value={index} onClick={()=>addToCart(product)}>Add</button></td></tr>
                      })
                    }
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-3">
                <div class="card">
                    <div class="card-body">
                    <table className="table" cellPadding="10" cellSpacing="10">
                      <thead>
                        <tr><th colSpan="2">Basket <button className="btn btn-outline-primary disabled">{count.length}</button> </th></tr>
                          {count.map((item)=>{
                            return <tr><td>{item.name}</td><td>{item.price}</td><td></td><td><button className="btn-outline-secondary btn-xs" >-</button><label value="2" className="w-20"></label><button className="btn-xs btn-outline-secondary">+</button></td></tr>
                            
                          })}
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

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// function 

export {Product, Cart, Example };