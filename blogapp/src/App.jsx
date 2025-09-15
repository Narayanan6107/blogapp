import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  const [blogs,setBlogs]=useState([]);

  const addBlog= (newb) =>{
    setBlogs([...blogs,newb])
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home blogs={blogs} />} />
      <Route path="/form" element={<Form addBlog={addBlog} />} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
