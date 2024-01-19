import axios from "axios"

const REACT_APP_API_URL = 'http://localhost:3001/api/v1'

export const axiosClient = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
})