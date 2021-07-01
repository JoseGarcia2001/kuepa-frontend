import React from 'react'
import logo from '../assets/media/logo.png'
import { useLocation } from 'wouter'

const Header = () => {
  const [location, setLocation] = useLocation()

  const handleLogout = () => {
    sessionStorage.clear()
    console.log(`Redirected from ${location}`)
    setLocation('/login')
  }

  return (
      <header>
        <img width="190px" src={logo} alt="Logo" />
        <p onClick={handleLogout}>Cerrar sesión</p>
      </header>
  )
}

export default Header
