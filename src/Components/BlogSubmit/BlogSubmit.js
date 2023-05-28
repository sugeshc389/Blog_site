import React, { useContext, useRef } from 'react'
import './BlogSubmit.css';
import { blogContext } from '../Contex';
import { useNavigate } from 'react-router-dom';

function BlogSubmit() {
  const inputRef = useRef(null)
  const blogData = useContext(blogContext);
  const { title, setTitle } = blogData;
  const navigate = useNavigate();

  
  const blogSubmit = (e) => {
    console.log(blogData.title);
    console.log(blogData.blog);
    e.preventDefault();
  }
  const clickHandler = () => {
    const Title = inputRef.current.title.value
    const Blog = inputRef.current.blog.value
    const id = Math.floor(Math.random() * 1000);

    console.log(title);
    setTitle([...title, { Title, Blog, id }])

    navigate('/title')
  }

  return (
    <div>
      <div className='maindiv'>
        <form ref={inputRef} className='form' onSubmit={blogSubmit} >
          <div className='sm'>
            <label htmlFor="Title"></label><br />
            <input
              type="text"
              id="title"
              required
              placeholder='Title'
              name="title"


            />
          </div>
          <div className='sm'>
            <label htmlFor="blog"></label><br />
            <input
              type="text"
              id="blog"
              required
              placeholder='Blog'
              name='blog'


            />
          </div><br /><br /><br />
          <button onClick={clickHandler} className='btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BlogSubmit