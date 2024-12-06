import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Red from './Components/Red'
import Blue from './Components/Blue'
import Nav from './Components/Nav'
import Home from './Components/Home'
import './index.css'

function App() {


  return (
  <>
    <div id="main-section">
      <h1>Color Selector</h1>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  </>
  )
}

export default App
