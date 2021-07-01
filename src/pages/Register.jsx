import React, { useState } from 'react'
import '../assets/styles/login.css'
import logo from '../assets/media/logo.png'
import Spinner from '../components/Spinner'
import { register } from '../services/Users'
import { useLocation } from 'wouter'
import { handleForm } from '../hooks/handleForm'
import { existUserValidate } from '../hooks/existUserValidate'

const Register = () => {
  const [location, setLocation] = useLocation()
  const [loading, setLoading] = useState(true)

  existUserValidate('/', setLoading)

  const onSendAction = async () => {
    await register(user, name, role, password)
    setLocation('/login')
  }

  const {
    handleSubmit,
    user,
    setUser,
    name,
    setName,
    role,
    setRole,
    password,
    setPassword
  } = handleForm(setLoading, onSendAction)

  const toggleForm = (event) => {
    event.preventDefault()
    console.log(`Redirected from ${location}`)
    setLocation('/login')
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
        <h1>Registrarse</h1>
        <label>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
            type="text"
            name="name"
            placeholder="Nombre"
          />
        </label>
        <label >
          <input
            value={user}
            onChange={({ target }) => setUser(target.value)}
            required
            type="text"
            name="user"
            placeholder="usuario"
          />
        </label>
        <label>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </label>
        <label className="role" htmlFor="role">
          <select
           value={role}
           onChange={({ target }) => setRole(target.value)}
           name="role">
            <option>Escoge tu rol</option>
            <option value="estudiante">Estudiante</option>
            <option value="moderador">Moderador</option>
          </select>
        </label>
        <button>Registrarse</button>
        <p onClick={toggleForm}>¿Quieres iniciar sesión?</p>
      </form>
    </div>
    }
    </>

  )
}

export default Register
