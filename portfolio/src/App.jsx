import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <>
    <div className='Navbar'>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <div className='nav_buttons'>
          <li><button ><a href="#about">About</a></button></li>
          <li><button ><a href="#projects">Projects</a></button></li>
          <li><button><a href="#contact">Contact</a></button></li>
          </div>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default App
