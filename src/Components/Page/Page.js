import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { blogContext } from '../Contex';
import './Page.css';

function Page() {
  const { id } = useParams()
  const { title } = useContext(blogContext)
  const data = title.filter((item) => item.id === parseInt(id))
  return (
    <div>{data.map((item) => (

      <div className='page'>
        <h1>{item.Title}</h1>
        <h2>{item.Blog}</h2>
      </div>
    ))}</div>
  )
}

export default Page