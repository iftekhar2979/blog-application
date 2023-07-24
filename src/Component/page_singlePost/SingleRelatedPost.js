import react from 'react';
import git from '../../images/git.webp'
import { Link } from 'react-router-dom';
import Tags from '../Post_Container/Tags';
const SingleRelatedPost = ({post}) => {
  const {title,image,tags,createdAt,id}=post
    return (
        <div class="card">
        <Link to={`/post/${id}`}>
          <img src={image} class="card-image" alt="" />
        </Link>
        <div class="p-4">
          <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
           {title}
          </a>
          <div class="mb-0 tags">
          {tags?.map((tag,index)=><Tags key={index} tag={tag}/>)}
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    )
};
export default SingleRelatedPost;