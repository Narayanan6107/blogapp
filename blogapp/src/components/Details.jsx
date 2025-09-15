import React from 'react'
import { useParams, useNavigate } from 'react-router'

function Details({blogs}) {
  const { id } = useParams()
  const nav = useNavigate()
  const blog = blogs[id]  

  return (
    <div className="details">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="details-img" />
      <p>{blog.text}</p>
      <button onClick={() => nav('/')}>Home</button>
    </div>
  )
}

export default Details
