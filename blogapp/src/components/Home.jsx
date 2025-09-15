import React from 'react'
import { useNavigate } from 'react-router'

function Home({blogs}) {
  const nav = useNavigate()
  return (
    <>
      <div className="mainpg">
        <div className="title">
          <h1>Blog application</h1>
          <button className='newbb' onClick={() => nav('/Form')}>
            Create a new blog
          </button>
        </div>
      </div>
      <div className="cards">
        {blogs.map((blog, index) => (
          <div className="card" key={index}>
            <img src={blog.image} alt={blog.title} className="card-img" />
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
