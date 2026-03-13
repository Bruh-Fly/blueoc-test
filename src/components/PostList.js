import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/postSlice"

function PostList() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
  <div>
    <h2>Posts</h2>

    {posts && posts.length > 0 ? (
      posts.slice(0,10).map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))
    ) : (
      <p>Loading posts...</p>
    )}

  </div>
)
}

export default PostList