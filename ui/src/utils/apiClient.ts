import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
})

export default apiClient;
