import React from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import "./App.css"

function App() {
  return (
    <div>

      <h1>React Redux Posts</h1>

      <PostForm />

      <PostList />

    </div>
  )
}

export default App