import axios from "axios"

// You can use your own backend, just change the baseURL to your url.

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
