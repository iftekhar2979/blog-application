import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postSlice from '../features/posts/postSlice';
import SinglePostSlice from '../features/SinglePost/SinglePostSlice';
import relatedPostSlice from '../features/relatedPost/relatedPostSlice';
import filterSlice from '../features/filter/filterSlice';
import sortSlice from '../features/sort/sortSlice';


export const store = configureStore({
  reducer: {
    blogs:postSlice,
    singleBlog:SinglePostSlice,
    relatedPost:relatedPostSlice,
    filterPost:filterSlice,
    sortingPost:sortSlice
  
  },
});
