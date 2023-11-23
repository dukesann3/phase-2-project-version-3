import useFetchPosts from "../custom_hooks/useFetch";
import Post from "./Post";

function Postlist(){

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);

    return(
        <>
            {posts.map(individualPost => <Post key={individualPost.id} individualPost={individualPost} setPosts={setPosts}/>)}
        </>
    )
}

export default Postlist;