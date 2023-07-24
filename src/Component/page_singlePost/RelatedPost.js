import react, { useEffect } from 'react';
import SingleRelatedPost from './SingleRelatedPost';
import {useDispatch, useSelector} from 'react-redux'
import { relatedTag } from '../../features/relatedPost/relatedPostSlice';
const RelatedPost = ({post}) => {
  const {posts,isLoading,isError,error}=useSelector(state=>state.relatedPost)
  const dispatch=useDispatch()
  const {tags,id}=post

  useEffect(()=>{
    dispatch(relatedTag({tags,id}))
  },[dispatch,tags,id])
 let content
 if(isLoading){
  content=<h1 className='text-4xl text-center'>Loading...</h1>
 }
 if(isError){
  content=<h1 className='text-4xl text-center'>{error}</h1>
 }
 if(!isLoading && !isError && posts){
  content=posts?.map(relatedPost=><SingleRelatedPost key={relatedPost.id} post={relatedPost}/>)
 }
    return (
        <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div class="space-y-4 related-post-container">
{content}
    
      </div>
    </aside>
    )
};
export default RelatedPost;