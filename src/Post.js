const Post = ({ post }) => {
  return (
    <article className='post'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>User Id:{post.userId}</p>
    </article>
  )
}
export default Post
