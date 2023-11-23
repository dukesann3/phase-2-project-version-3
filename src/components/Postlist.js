import useFetchPosts from "../custom_hooks/useFetch";
import { useState } from "react";
import Post from "./Post";
import { addNewPostToDataBase } from "../helper_functions/addPost";

function Postlist(){

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);
    const [POSTform, setPOSTform] = useState({
        timestamp: null,
        author: null,
        post: null,
        isHidden: null,
        likes: null,
    });

    function handleNewPostChange(event){
        setPOSTform({
            ...POSTform,
            [event.target]: event.target.value,
        });
    }

    return(
        <>
            <form className='make-new-post-form'>
                <input type='text' placeholder='Post' name='post' onChange={handleNewPostChange}/>
                <input type='submit' value='Submit'/>
            </form>
            {posts.map(individualPost => <Post key={individualPost.id} individualPost={individualPost} setPosts={setPosts}/>)}
        </>
    )
}

export default Postlist;