
function Post({individualPost, setPost}){

    const {id, author, post, isHidden, likes} = individualPost;

    //todo: add PATCH request to hide post
    //todo: add PATCH request to like post

    return(
        <div>
            <li>{author}</li>
            <li>{post}</li>
            <li>{isHidden}</li>
            <li>{likes}</li>
        </div>
    )
}

export default Post;