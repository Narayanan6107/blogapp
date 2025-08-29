import {React, useState, useEffect} from 'react'
import{useNavigate} from 'react-router'

const Home = () => {
    const [product,setProduct]=useState([]);
    const nav=useNavigate()
    const apiCall = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data);
  };
  useEffect(()=>{
    apiCall();
  },[]);

  return (
    <>
    <div className='title'>
      <center>
      <h1>Product Catalog</h1>
      <h3>Discover amazing products</h3>
      </center>
    </div>
    <div className="content">
      {product.map(prod => (
      <div className="tile" key={prod.id}>
        <img src={prod.image} alt={prod.title} />
        <h3>{prod.title}</h3>
        <p>{prod.price}</p>
        <button className='detailbutton' key={prod.id} onClick={() => nav("/product")}>View Details</button>
      </div>
    ))}
      </div>

    </>
  )
}

export default Home

