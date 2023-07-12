import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,

})

const getTodos = async () => {
  const response = await instance.get(`/todos`,{
    params : {
      format : "json",
      limit : 5,
      has_breeds : true,
      order : "ASC"
    }
  })  

  return response.data
}

const addTodo = async (todo) => {
  const response = await instance.post(`/todos`, todo)
  return response.data
}

export { getTodos, addTodo }