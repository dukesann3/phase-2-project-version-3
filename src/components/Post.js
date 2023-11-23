
function Post({individualPost, setPost}){

    const {author, post, isHidden, likes} = individualPost;

    return(
        <>
            <li>{author}</li>
        </>
    )
}

export default Post;