import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import Browse from './pages/Browse'
import Home from './pages/Home'
import Genre from './pages/Genre'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </>
  )
}

export default App