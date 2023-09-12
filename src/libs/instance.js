import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/index.css'

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL,
  headers: {
    accept: 'application/json',
    Authorization:
      `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  }
})

export const request = (axiosConfig) =>
  apiInstance(axiosConfig)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
    })
    .catch((err) => {
      toast.dismiss()
      toast.error(err?.response?.data?.status_message || 'Service Unavailable')
      return err
    })
