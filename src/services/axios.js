import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(async (config) => {
  return config
})

api.interceptors.response.use(async (response) => {
  return response
})

export { api }
