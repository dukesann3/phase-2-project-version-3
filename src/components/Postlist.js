import useFetchPosts from "../custom_hooks/useFetch";
import { useState } from "react";
import Post from "./Post";
import { addNewPostToDataBase, getCurrentTimeStamp } from "../helper_functions/addPost";
import { isNotFilledOut } from "../helper_functions/jsLogicWordedDifferently";

function Postlist() {

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);
    const [POSTform, setPOSTform] = useState({
        timestamp: null,
        author: "user",
        post: null,
        isHidden: false,
        likes: 0,
    });

    function handleNewPostChange(event) {
        setPOSTform({
            ...POSTform,
            [event.target.name]: event.target.value,
        });
    }

    function setCurrentTimeStampOnForm() {
        const currentTimeStamp = getCurrentTimeStamp();
        setPOSTform({
            ...POSTform,
            timestamp: currentTimeStamp,
        })
    }

    function checkIfPostIsFilledCompletely() {
        for (let item in POSTform) {
            if (isNotFilledOut(POSTform[item])) {
                return false;
            }
        }
        return true;
    }

    async function handleNewPostSubmit(event) {
        event.preventDefault();
        setCurrentTimeStampOnForm();
        const isFormFilledCompletely = checkIfPostIsFilledCompletely();
        if (isFormFilledCompletely) {
            debugger;
            await addNewPostToDataBase(POSTform, apiUrl);
        }
        else{
            debugger;
        }
    }

    return (
        <>
            <form className='make-new-post-form' onSubmit={handleNewPostSubmit}>
                <input type='text' placeholder='Post' name='post' onChange={handleNewPostChange} />
                <input type='submit' value='Submit' />
            </form>
            {posts.map(individualPost => <Post key={individualPost.id} individualPost={individualPost} setPosts={setPosts} />)}
        </>
    )
}

export default Postlist;