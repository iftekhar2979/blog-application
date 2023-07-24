import { createSlice } from "@reduxjs/toolkit"

const initialState={
    newest:false,
    mostLiked:false
}

const sortSlice=createSlice({
    name:'sortSlice',
    initialState,
    reducers:{
        sortNewest:(state,action)=>{
        state.newest=true
        state.mostLiked=false
        },
        mostLiked:(state,action)=>{
            state.newest=false
            state.mostLiked=true
        }
    }
})
export default sortSlice.reducer
export const {sortNewest,mostLiked}=sortSlice.actions