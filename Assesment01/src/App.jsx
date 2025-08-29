import {React, useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home.jsx'
import Product from "./pages/Product.jsx"
import "./App.css"

const App = () => {
  const [product,setProduct]=useState([]);
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product prod={product}/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App