import useFetchPosts from "../custom_hooks/useFetch";
import { useState } from "react";
import Post from "./Post";
import { getCurrentTimeStamp } from "../helper_functions/addPost";
import { isNotFilledOut } from "../helper_functions/jsLogicWordedDifferently";
import { sortPostsInOrderOfId } from "../helper_functions/sorting";
import { Form } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function Postlist() {

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);
    const sortedPostsInAscendingOrderOfId = sortPostsInOrderOfId(posts);

    const [POSTform, setPOSTform] = useState({
        timestamp: null,
        author: "user",
        post: null,
        isHidden: false,
        isLiked: false,
        likes: 0,
    });

    async function addNewPostToDataBase(POSTform) {
        return await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(POSTform)
        })
            .then(newPostResponse => newPostResponse.json())
            .then((newPost) => {
                setPosts([...posts, newPost]);
                setPOSTform({
                    timestamp: null,
                    author: "user",
                    post: null,
                    isHidden: false,
                    isLiked: false,
                    likes: 0,
                })

            })
    }

    function handleNewPostChange(event) {
        setPOSTform({
            ...POSTform,
            post: event.target.value,
        });
    }

    function setCurrentTimeStampOnForm() {
        const currentTimeStamp = getCurrentTimeStamp();
        setPOSTform({
            ...POSTform,
            timestamp: currentTimeStamp,
        });
    }

    function checkIfPostIsFilledCompletely() {
        for (let item in POSTform) {
            if (isNotFilledOut(POSTform[item])) {
                return false;
            }
        }
        return true;
    }

    async function handleSubmitForm(event) {
        event.preventDefault();
        if (checkIfPostIsFilledCompletely()) {
            addNewPostToDataBase(POSTform);
        }
        else {
            console.log('error');
        }

    }

    function setEdittedPostOntoUseState(edittedPost) {
        setPosts(posts.map((post) => {
            const { id } = edittedPost;
            if (post.id === id) {
                return edittedPost;
            }
            return post;
        }))
    }

    return (
        <>
            <Form className='make-new-post-form' onSubmit={handleSubmitForm}>
                <Form.Input type='text' placeholder='Post' name='post' onChange={handleNewPostChange} />
                <Form.Button type='submit' onClick={setCurrentTimeStampOnForm}>SUBMIT</Form.Button>
            </Form>
            {sortedPostsInAscendingOrderOfId.map(individualPost => <Post key={individualPost.id} individualPost={individualPost} setEdittedPostOntoUseState={setEdittedPostOntoUseState} postType={'postlist'} />)}
        </>
    )
}

export default Postlist;