import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getPosts } from '../posts/getBlogs'
const initialState={
    isLoading:false,
    isError:false,
    post:{},
    error:""
}
export const fetchSinglePost=createAsyncThunk('fetchSinglePost/posts',async(id)=>{
    const posts=await getPosts(`/blogs/${id}`)
    return posts
})
const singlePostSlice=createSlice({
    name:'singlePost',
    initialState,
    reducers:{
        increaseLike:(state,action)=>{
            state.post.likes=action.payload+1
        },
        savePost:(state,action)=>{
            state.post.isSaved=!action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSinglePost.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.error=''
        })
        .addCase(fetchSinglePost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.post=action.payload
            state.error=''
        }) .addCase(fetchSinglePost.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.posts={}
            state.error=action.payload
        })
    }
})
export default singlePostSlice.reducer
export const {increaseLike,savePost}=singlePostSlice.actions