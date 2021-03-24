import './App.css';
import data from './data/data.json';
import setList from './data/cart.json';
import 'bootstrap/dist/css/bootstrap.css';
function Product() {
  return (
                  <table className="table" cellPadding="10" cellSpacing="10">
                    <thead>
                      <tr><th colSpan="2">Products</th></tr>
                      <tr>
                        <th scope="col" className = "w-100">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operation</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.product.map((product, index)=>{
                      return <tr key={index}><td>{product.name}</td><td>${product.price}</td><td><button className="btn btn-primary" value={index} onClick={addToCart}>Add</button></td></tr>
                    })
                  }
                    </tbody>
                  </table>
  );
}
function Cart(){
  return(
     setList.cart.map((item)=>{
     return <tr><td>{item.name}</td></tr>
    })
  )
}

const addToCart = (i) => {
  console.log(data.product[i.target.value]);
}


// function 

export {Product, Cart };