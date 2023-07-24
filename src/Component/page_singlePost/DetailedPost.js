import react, { useEffect } from 'react';
import SingleDetailedPost from './SingleDetailedPost';
import RelatedPost from './RelatedPost';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePost } from '../../features/SinglePost/SinglePostSlice';
const DetailedPost = (props) => {
  const {post,isLoading,isError,error}=useSelector(state=>state.singleBlog)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {postId}=useParams()
 
  useEffect(()=>{
    dispatch(fetchSinglePost(postId))
  },[dispatch,postId])
    return (
        <>
        <div class="container mt-8">
        <a class="inline-block text-gray-600 home-btn" id="lws-goHome" onClick={()=>navigate('/')}>
      <  BiArrowBack/>Go Home</a>
      </div>
      <section class="post-page-container">
        <SingleDetailedPost post={post}/>
        <RelatedPost post={post}/>
        </section>
        </>
    )
};
export default DetailedPost;