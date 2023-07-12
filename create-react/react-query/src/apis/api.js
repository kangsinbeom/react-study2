import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,

})

export const getTodos = async () => {
  const response = await instance.get(`/todos`)
  return response.data
}
