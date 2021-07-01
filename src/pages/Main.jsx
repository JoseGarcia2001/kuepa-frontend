import React, { useState, useEffect } from 'react'
import Content from '../components/Content'
import Chat from '../components/Chat'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import { useLocation } from 'wouter'

const Main = () => {
  const [location, setLocation] = useLocation()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const user = sessionStorage.getItem('user')

    if (!user) {
      console.log(`Redirected from ${location}`)
      setLocation('/login')
      return
    }

    const userParsed = JSON.parse(user)
    setName(userParsed.data.name)
    setRole(userParsed.data.role)
    setLoading(false)
  }, [])

  return (
    <>
    {
      loading
        ? <Spinner />
        : <>
            <Header/>
            <main style={{ background: 'white' }}>
            <Content/>
            <Chat name={name} role={role} />
            </main>
          </>
    }
    </>
  )
}

export default Main
