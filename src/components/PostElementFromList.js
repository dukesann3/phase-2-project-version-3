
function PostElementFromList({ individualPost, handleIsHiddenPropertyForBothDataBaseAndUseState, handleLikedPropertyForBothDataBaseAndUseState }) {

    const { author, post, likes, timestamp, isHidden } = individualPost;

    return (
        <>
            {!isHidden ?
                <div>
                    <li>{author}</li>
                    <li>{post}</li>
                    <li onClick={handleLikedPropertyForBothDataBaseAndUseState}>{likes}</li>
                    <li>{timestamp}</li>
                    <button onClick={handleIsHiddenPropertyForBothDataBaseAndUseState}>HIDE BUTTON</button>
                </div>
            : null}
        </>
    )
}

export default PostElementFromList;
