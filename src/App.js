import React from 'react';
import './App.css';
import BlogSubmit from './Components/BlogSubmit/BlogSubmit';
import { useState } from 'react';
import Page from './Components/Page/Page';
import Title from './Components/Title/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { blogContext } from './Components/Contex';


function App() {

  const [title, setTitle] = useState([]);

  const states = { title, setTitle }
  return (
    <div className='main'>

      <BrowserRouter>
        <blogContext.Provider value={states}>
          <Routes>
            <Route path='/' Component={BlogSubmit} />
            <Route path='/page/:id' Component={Page} />
            <Route path='/title' Component={Title} />
          </Routes>
        </blogContext.Provider>
      </BrowserRouter>

    </div>

  );
}

export default App;
