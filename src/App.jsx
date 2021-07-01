import React from 'react'
import { Route } from 'wouter'
import './assets/styles/styles.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <Route path="/"><Main/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
    </>
  )
}

export default App
