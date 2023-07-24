import react from 'react';
import PostContainer from './Post_Container/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedPosts, showAll, showOnlySaved } from '../features/filter/filterSlice';
import { mostLiked, sortNewest } from '../features/sort/sortSlice';

const SideBar = () => {
    const {showSaved,saved}=useSelector(state=>state.filterPost)
    const {posts}=useSelector(state=>state.blogs)
    const dispatch=useDispatch()
    const handleSaved=()=>{
        dispatch(fetchSavedPosts())
        dispatch(showOnlySaved())
    }
    const handleAll=()=>{
        dispatch(showAll())
    }
    const handleNewest=(e)=>{
        // console.log(e.target.value)
        const value=e.target.value
        if(value==='newest'){
            dispatch(sortNewest())
        }else{
            dispatch(mostLiked())
        }
    }
 
    return (
        <section class="wrapper">
            <aside>
                <div class="sidebar-items">
                    <div class="sidebar-content">
                        <h4>Sort</h4>
                        <select onClick={handleNewest} name="sort"  id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                            <option value="">Default</option>
                            <option value="newest" >Newest</option>
                            <option value="most_liked">Most Liked</option>
                        </select>
                    </div>
                    <div class="sidebar-content">
                        <h4>Filter</h4>
                        <div class="radio-group">
                            <div >
                                <input type="radio" name="filter" id="lws-all" checked={!showSaved} class="radio" onClick={handleAll}/>
                                <label for="lws-all" onClick={handleAll}>All</label>
                            </div>
                            <div  >
                                <input type="radio" name="filter" id="lws-saved" checked={showSaved} class="radio" onClick={handleSaved}/>
                                <label for="lws-saved" onClick={handleSaved}>Saved</label>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <PostContainer/>
        </section>
    )
};
export default SideBar;