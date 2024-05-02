import { useState } from 'react'
import { Coloring, About, Home, Maze, Puzzle, Shadow, ShapeNumber, Similarities, Toolbar } from './components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <Toolbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/similarities' element={<Similarities/>}/>
        <Route path='/coloring' element={<Coloring/>}/>
        <Route path='/maze' element={<Maze/>}/>
        <Route path='/puzzle' element={<Puzzle/>}/>
        <Route path='/shadow' element={<Shadow/>}/>
        <Route path='/shapeNumber' element={<ShapeNumber/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
