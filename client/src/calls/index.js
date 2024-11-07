import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers : {
        'Content-Type' : 'application/json',
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
})
