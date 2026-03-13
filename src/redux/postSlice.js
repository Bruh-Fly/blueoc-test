import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get(API_URL)
    return response.data
  }
)

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post) => {
    const response = await axios.post(API_URL, post)
    return response.data
  }
)

const postSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle"
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload
    })

    builder.addCase(addPost.fulfilled, (state, action) => {
      state.items.unshift(action.payload)
    })

  }
})

export default postSlice.reducer