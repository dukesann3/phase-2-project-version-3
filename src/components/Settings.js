import useFetchPosts from "../custom_hooks/useFetch";
import Post from "./Post";
import { sortPostsInOrderOfId } from "../helper_functions/sorting";

function Settings() {

    const apiUrl = 'http://localhost:8000/posts';
    const [posts, setPosts] = useFetchPosts(apiUrl);
    const sortedPostsInAscendingOrderOfId = sortPostsInOrderOfId(posts);

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
            <h1>SETTINGS</h1>
            <h3>HIDDEN POSTS</h3>
            {sortedPostsInAscendingOrderOfId.map((post) => {
                const { isHidden } = post;
                if (isHidden) {
                    return <Post individualPost={post} setEdittedPostOntoUseState={setEdittedPostOntoUseState} postType={'postSettings'} />
                }
            })}
        </>
    )
}

export default Settings;