import React, { useContext } from 'react'
import { blogContext } from '../Contex'
import { Link, useNavigate } from 'react-router-dom';
import './Title.css'

function Title() {
  const navigate = useNavigate();
  const blog = useContext(blogContext);
  const { title } = blog
  console.log(title);
  return (
    <div className='title' >

      {title.map((item, index) =>

        <h1 ><Link className='link' to={`/page/${item.id}`}>{index + 1}:{item.Title}</Link></h1>



      )}
      <button onClick={() => navigate('/')}>Add Blog</button>


    </div>
  )
}

export default Title