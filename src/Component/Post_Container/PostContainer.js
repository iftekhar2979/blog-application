import react, { useEffect } from 'react';
import SinglePost from './SinglePost';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../features/posts/postSlice';
const PostContainer = (props) => {
    const { isLoading, posts, isError, error } = useSelector(state => state.blogs)
    const { saved, showSaved } = useSelector(state => state.filterPost)
    const { newest, mostLiked } = useSelector(state => state.sortingPost)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    let content
    if (isLoading) {
        content = <h1 className='text-4xl text-center'>Loading...</h1>
    }
    if (isError) {
        content = <h1 className='text-4xl text-center'>{error}</h1>
    }
    if (!isError && !isLoading && posts) {
        const showSavedOrPost = showSaved ? saved : posts
        let newestPostSorted = [...showSavedOrPost].sort((a, b) => {
            return new Date(b['createdAt']) - new Date(a['createdAt'])
        })
        let mostLikedPosts = [...showSavedOrPost].sort((a, b) => {
            return b['likes'] - a['likes']
        })
        const sorted = newest ? newestPostSorted : showSavedOrPost
        const sortMostLikedPost = mostLiked ? mostLikedPosts : showSavedOrPost
        if (newest) {
            content = sorted?.map(post => <SinglePost key={post.id} post={post} />)
        } else if (mostLiked) {
            content = sortMostLikedPost?.map(post => <SinglePost key={post.id} post={post} />)
        } else {
            content = showSavedOrPost?.map(post => <SinglePost key={post.id} post={post} />)
        }
    }


    return (
        <main class="post-container" id="lws-postContainer">
            {content}
        </main>
    )
};
export default PostContainer;