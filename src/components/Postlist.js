import useFetchPosts from "../custom_hooks/useFetch";
import { useEffect, useRef } from "react";
import Post from "./Post";
import { getCurrentTimeStamp } from "../helper_functions/addPost";
import { isNotFilledOut } from "../helper_functions/jsLogicWordedDifferently";

function Postlist() {

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);
    const POSTform = useRef({
        timestamp: null,
        author: "user",
        post: null,
        isHidden: false,
        isLiked: false,
        likes: 0,
    });

    useEffect(()=>{
        POSTform.current = {
            timestamp: null,
            author: "user",
            post: null,
            isHidden: false,
            isLiked: false,
            likes: 0,
        };
    },[addNewPostToDataBase]);

    async function addNewPostToDataBase(POSTform){
        return await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(POSTform)
        })
        .then(newPostResponse => newPostResponse.json())
        .then(newPost => setPosts([...posts, newPost]))
    }

    function handleNewPostChange(event) {
        POSTform.current = {
            ...POSTform.current,
            post: event.target.value,
        };
    }

    function setCurrentTimeStampOnForm() {
        const currentTimeStamp = getCurrentTimeStamp();
        POSTform.current = {
            ...POSTform.current,
            timestamp: currentTimeStamp,
        };
    }

    function checkIfPostIsFilledCompletely() {
        for (let item in POSTform.current) {
            if (isNotFilledOut(POSTform.current[item])) {
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
            await addNewPostToDataBase(POSTform.current);
        }
    }

    function setPatchedPostOntoUseState(edittedPost){
        setPosts(posts.map((post) => {
            const {id} = edittedPost;
            if(post.id === id){
                return edittedPost;
            }
            return post;
        }))
    }

    return (
        <>
            <form className='make-new-post-form' onSubmit={handleNewPostSubmit}>
                <input type='text' placeholder='Post' name='post' onChange={handleNewPostChange} />
                <input type='submit' value='Submit' />
            </form>
            {posts.map(individualPost => <Post key={individualPost.id} individualPost={individualPost} setPatchedPostOntoUseState={setPatchedPostOntoUseState} postType={'postlist'}/>)}
        </>
    )
}

export default Postlist;