import react, { useEffect } from 'react';
import {BsHandThumbsUpFill,BsFillBookmarkPlusFill,BsFillBookmarkCheckFill} from 'react-icons/bs'
import githubimg from '../../images/mern.webp'
import {useDispatch} from 'react-redux'
import { fetchSinglePost, increaseLike, savePost } from '../../features/SinglePost/SinglePostSlice';
import { useParams } from 'react-router-dom';
import Tags from '../Post_Container/Tags';
import axios from 'axios';
const SingleDetailedPost = ({post}) => {
  const {title,description,image,tags,likes,isSaved,createdAt,id}=post
  const dispatch=useDispatch()
  const handleLike=()=>{
    dispatch(increaseLike(likes))
    axios.patch(`http://localhost:9000/blogs/${id}`,{likes:likes+1})
    .then(res=>res.data)
    .catch(error=>console.log(error))
  }
  const handleSave=()=>{
    dispatch(savePost(isSaved))
    axios.patch(`http://localhost:9000/blogs/${id}`,{isSaved:!isSaved})
    .then(res=>res.data)
    .catch(error=>console.log(error))
  }
    return (
        <main class="post">
          <img src={image} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
          <div>
            <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
              {title}
            </h1>
            <div class="tags" id="lws-singleTags">
              {tags?.map((tag,i)=><Tags key={i} tag={tag}/>)}
            </div>
            <div class="btn-group">
              
              <button class="like-btn" id="lws-singleLinks" onClick={handleLike}>
              <BsHandThumbsUpFill/> {likes}
              </button>
        
              <button class="active save-btn" id="lws-singleSavedBtn" onClick={handleSave}>
              {isSaved?<><BsFillBookmarkCheckFill/>Saved</>:<><BsFillBookmarkPlusFill/>Save</>}
              </button>
            </div>
            <div class="mt-6">
              <p>
                {description}
              </p>
            </div>
          </div>
        </main>
    )
};
export default SingleDetailedPost;