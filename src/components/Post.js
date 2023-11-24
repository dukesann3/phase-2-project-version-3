
function Post({individualPost, setPost}){

    const {id, author, post, isHidden, likes, timestamp} = individualPost;

    //todo: add PATCH request to hide post
    //todo: add PATCH request to like post



    return(
        <div>
            <li>{author}</li>
            <li>{post}</li>
            <li>{isHidden}</li>
            <li>{likes}</li>
            <li>{timestamp}</li>
            <button>HIDE POST</button>
        </div>
    )
}

export default Post;