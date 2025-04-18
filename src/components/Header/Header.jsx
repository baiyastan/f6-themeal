import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

function Header() {
  const [title, setTitle] = useState("")
  const navigate = useNavigate()

  function goToSearch(e) {
    if(e.keyCode == 13) {
      navigate(`/search/${title}`)
    }
  }
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
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='style' type="text" placeholder='search' onKeyDown={goToSearch} />
        </div>
      </nav>
    </header>
  )
}

export default Header
