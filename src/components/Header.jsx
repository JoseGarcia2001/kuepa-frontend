import React, { useState, useEffect } from 'react'
import logo from '../assets/media/logo.png'
import { useLocation } from 'wouter'

const Header = () => {
  const [isLogged, setIsLogged] = useState()
  const [location, setLocation] = useLocation()

  useEffect(() => {
    const user = localStorage.getItem('user')
    user
      ? setIsLogged(true)
      : setIsLogged(false)
  })

  const handleLogout = () => {
    sessionStorage.clear()
    console.log(`Redirected from ${location}`)
    setLocation('/login')
  }

  return (
      <header>
        <img width="190px" src={logo} alt="Logo" />
        {isLogged && <p onClick={handleLogout}>Cerrar sesión</p>}
      </header>
  )
}

export default Header
