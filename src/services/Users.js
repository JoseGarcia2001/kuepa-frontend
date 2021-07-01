import axios from 'axios'

// const API_URL = 'https://onegroup-app-api.herokuapp.com/api'
const API_URL = 'http://localhost:3001/api'

export const login = async (user, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { user, password })
  return data
}

export const register = async (user, name, role, password) => {
  const { data } = await axios.post(`${API_URL}/users`, {
    user,
    name,
    role,
    password
  })
  return data
}
