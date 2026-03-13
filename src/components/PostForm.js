import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../redux/postSlice"

function PostForm() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addPost({
      title,
      body
    }))

    setTitle("")
    setBody("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <br/>

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
      />

      <br/>

      <button type="submit">
        Add Post
      </button>

    </form>
  )
}

export default PostForm