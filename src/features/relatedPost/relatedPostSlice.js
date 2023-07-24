import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getPosts } from '../posts/getBlogs'
const initialState={
    isLoading:false,
    isError:false,
    posts:[],
    error:""
}
export const relatedTag=createAsyncThunk('fetchRelatedPosts/posts',async({tags,id})=>{
 
      let queryString = tags?.reduce((acc, cur) => {
          if (!acc) {
              acc += `tags_like=${cur}&`
          } else {
              acc += `tags_like=${cur}&`
          }
  
          return acc
      }, '')
      queryString = queryString?.substring(0, queryString.length - 1)

    const posts=await getPosts(`/blogs?${queryString}&id_ne=${id}`)
    return posts
})
const relatedPostSlice=createSlice({
    name:'relatedBlog',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(relatedTag.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.error=''
        })
        .addCase(relatedTag.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.posts=action.payload
            state.error=''
        }) .addCase(relatedTag.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.posts=[]
            state.error=action.payload
        })
    }
})
export default relatedPostSlice.reducer