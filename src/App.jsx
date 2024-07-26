/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/movie/:id'element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
