import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Form({addBlog}) {
  const nav = useNavigate()
  const [fd, setfd] = useState({
    title: "",
    image: "",
    text: ""
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "image" && files[0]) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setfd({
          ...fd,
          image: reader.result
        })
      }
      reader.readAsDataURL(files[0])
    } else {
      setfd({
        ...fd,
        [name]: value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBlog(fd)
    nav("/")
  }

  return (
    <div className="mainf">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={fd.title}
          onChange={handleChange}
        />
        <label>Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <label>Blog Content:</label>
        <textarea
          name="text"
          placeholder="Write your blog here"
          value={fd.text}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
