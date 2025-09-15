import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import Form from './components/Form'
import Details from './components/Details'   

function App() {
  const [blogs, setBlogs] = useState([])

  const addBlog = (newb) => {
    setBlogs([...blogs, newb])
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/form" element={<Form addBlog={addBlog} />} />
          <Route path="/details/:id" element={<Details blogs={blogs} />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
