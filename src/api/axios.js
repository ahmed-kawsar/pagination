import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const getPosts = async (pageParam = 1) => {
  const response = await api.get(`/posts?_page=${pageParam}`)
  return response.data
}
