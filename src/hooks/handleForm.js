import { useState } from 'react'

export const handleForm = (handleLoading, handleSend) => {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      handleLoading(true)

      await handleSend()
    } catch (error) {
      handleLoading(false)
      setUser('')
      setPassword('')
    }
  }
  return {
    handleSubmit,
    user,
    setUser,
    password,
    setPassword,
    name,
    setName,
    role,
    setRole
  }
}
