import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import logo from '../assets/media/logo.png'
import '../assets/styles/login.css'
import { handleForm } from '../hooks/handleForm'
import { existUserValidate } from '../hooks/existUserValidate'
import { login } from '../services/Users'
import { useLocation } from 'wouter'

const Login = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useLocation()

  existUserValidate('/', setLoading)

  const onSendAction = async () => {
    const infoUser = await login(user, password)
    sessionStorage.setItem('user', JSON.stringify(infoUser))
    setLocation('/')
  }

  const {
    handleSubmit,
    user,
    setUser,
    password,
    setPassword
  } = handleForm(setLoading, onSendAction)

  const toggleForm = (event) => {
    event.preventDefault()
    console.log(`Redirected from ${location}`)
    setLocation('/register')
  }

  return (
    <>
  {
    loading
      ? <Spinner/>
      : <div className="form__container">
      <form
        className="form-data"
        onSubmit={handleSubmit}>
        <img width="190px" src={logo} alt="Logo" />
        <h1>Iniciar sesión</h1>
        <label>
          <input
            type="text"
            value={user}
            name="user"
            placeholder="usuario"
            onChange={({ target }) => setUser(target.value)}
            required
          />
        </label>
        <label>
          <input
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            required
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </label>
        <button>Iniciar Sesión</button>
        <p onClick={toggleForm}>¿Quieres crear una cuenta?</p>
      </form>
    </div>
  }

    </>
  )
}

export default Login
