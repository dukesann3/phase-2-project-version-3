import useFetchPosts from "../custom_hooks/useFetch";
import Post from "./Post";

function Settings(){

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);

    function setPatchedPostOntoUseState(edittedPost){
        setPosts(posts.map((post) => {
            const {id} = edittedPost;
            if(post.id === id){
                return edittedPost;
            }
            return post;
        }))
    }

    return(
        <>
            <h1>SETTINGS</h1>
            <h3>HIDDEN POSTS</h3>
            <ul>
                {posts.map((post) => {
                    const {isHidden} = post;
                    if(isHidden){
                        return <Post individualPost={post} setPatchedPostOntoUseState={setPatchedPostOntoUseState} postType={'postSettings'}/>
                    }
                })}
            </ul>
        </>
    )
}

export default Settings;