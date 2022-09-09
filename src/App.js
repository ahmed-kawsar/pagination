import { useState, useEffect } from 'react'
import { getPosts } from './api/axios'
import Post from './Post'

const App = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    try {
      getPosts(page).then((json) => setPosts(json))
    } catch (error) {
      console.log(error)
    }
  }, [page])

  const content = posts.map((post) => <Post key={post.id} post={post} />)

  const prevPage = () => setPage((prev) => prev - 1)
  const nextPage = () => setPage((prev) => prev + 1)

  return (
    <div className='App'>
      <div className='buttons'>
        <button onClick={prevPage} disabled={page === 1}>
          &laquo; PrevPage
        </button>
        <button onClick={nextPage} disabled={!posts.length}>
          NextPage &raquo;
        </button>
      </div>
      {content}
    </div>
  )
}
export default App
