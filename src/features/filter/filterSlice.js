import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "../posts/getBlogs"

const initialState={
    isLoading:false,
    isError:false,
    error:'',
    saved:[],
    showSaved:false
}
export const fetchSavedPosts=createAsyncThunk('fetchSavedPosts/posts',async()=>{
    const posts=await getPosts('/blogs?isSaved=true')
    return posts
})
const filterSlice=createSlice({
    name:'FilteredPost',
    initialState,
    reducers:{
        showOnlySaved:(state,action)=>{
            state.showSaved=true
        },
        showAll:(state,action)=>{
            state.showSaved=false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSavedPosts.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.error=''
        })
        .addCase(fetchSavedPosts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.saved=action.payload
            state.error=''
        }) .addCase(fetchSavedPosts.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.saved=[]
            state.error=action.payload
        })
    }
})
export default filterSlice.reducer
export const {showOnlySaved,showAll}=filterSlice.actions