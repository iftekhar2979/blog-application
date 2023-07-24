import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getPosts } from './getBlogs'
const initialState={
    isLoading:false,
    isError:false,
    posts:[],
    error:""
}
export const fetchPosts=createAsyncThunk('fetchPosts/posts',async()=>{
    const posts=await getPosts('/blogs')
    return posts
})
const postSlice=createSlice({
    name:'blogs',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.error=''
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.posts=action.payload
            state.error=''
        }) .addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.posts=[]
            state.error=action.payload
        })
    }
})
export default postSlice.reducer