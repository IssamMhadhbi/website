import React from 'react'
import './Navbar.css'
import logo from '../../res/logo.jpeg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate() ;
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <div className='Navbar'>
        <img src={logo} alt=''/>
        <div className='search-bar'>
            <input type='text' placeholder='search' />
            <button className='btn'>Search</button>
        </div>
        <button className='btn' onClick={goToLogin}>Login</button>
    </div>
  )
}

export default Navbar