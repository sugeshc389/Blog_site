import React, { useContext } from 'react'
import { blogContext } from '../Contex'
import { Link } from 'react-router-dom';

function Title() {
  const blog = useContext(blogContext);
  const { title } = blog
  console.log(title);

  console.log('hioi');
  return (
    <div>

      {title.map((item) =>

        <h1><Link to={'/page'}>{item.Title}</Link></h1>

      )}

    </div>
  )
}

export default Title