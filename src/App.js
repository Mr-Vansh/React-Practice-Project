import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "./App.css";


import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/*********  NAVBAR COMPONENT ******/}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Invalid URL</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App