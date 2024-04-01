import { useState } from 'react'
import { Home, Toolbar } from './components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <Toolbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
