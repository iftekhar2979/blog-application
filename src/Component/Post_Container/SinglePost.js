import react from 'react';
import gitPic from '../../images/git.webp'
import {Link }from 'react-router-dom'
import {BsHandThumbsUpFill,BsFillBookmarkPlusFill} from 'react-icons/bs'
import Tags from './Tags';

const SinglePost = ({post}) => {
const {title,description,image,tags,likes,isSaved,createdAt,id}=post
  return (
        <div class="lws-card">
       <Link to={`/post/${id}`}> <a >
          <img src={image} class="lws-card-image" alt="" />
        </a></Link>
        <div class="p-4">
          <div class="lws-card-header">
            <p class="lws-publishedDate">{createdAt}</p>
            <p class="lws-likeCount"><BsHandThumbsUpFill/>{likes}</p>
          </div>
          <Link to={`/post/${id}`}> <a  class="lws-postTitle"> {title}</a></Link>
          <div class="lws-tags">
           {tags?.map((tag,index)=><Tags key={index} tag={tag}/>)}
            </div>
        
          <div class="flex gap-2 mt-4">
            <span class="lws-badge">{isSaved && 'Saved'}</span>
          </div>
         
        </div>
      </div>
    )
};
export default SinglePost;