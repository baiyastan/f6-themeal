import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <header className='header'>
      <nav className='nav container'>
        <img className='logo' src="https://www.themealdb.com/images/logo.svg" alt="" />
        <div className='nav-right'>
          <button className='home-btn'>
            <Link to="/">Home</Link>
          </button>
          <button className='api-btn'>
            <Link  to="/api">API</Link>
          </button>
          <input className='style' type="text" placeholder='search'/>
        </div>
      </nav>
    </header>
  )
}

export default Header
