import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Red from './Components/Red'
import Blue from './Components/Blue'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {


  return (
  <>
    <div id="main-section">
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Red />} />
        <Route path="/red" element={<Blue />} />
      </Routes>
    </div>
  </>
  )
}

export default App
