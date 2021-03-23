// import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
let data1;
function Product() {
  return (
    data1 = data.product.map((product, index)=>{
     return <tr key={index} className="tr-border"><td>{product.name}</td><td>${product.price}</td> <td><button className="btnadd">Add</button></td> </tr>
    })
  );
}

// function 

export default Product;
