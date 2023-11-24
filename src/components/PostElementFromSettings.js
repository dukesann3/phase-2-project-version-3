
function PostElementFromSettings({ individualPost, handleIsHiddenPropertyForBothDataBaseAndUseState }) {

    const { author, post, isHidden } = individualPost;

    return (
        <>
            {isHidden ?
                <div>
                    <li>{author}</li>
                    <li>{post}</li>
                    <button onClick={handleIsHiddenPropertyForBothDataBaseAndUseState}>UNHIDE BUTTON</button>
                </div>
            : null}
        </>
    )
}

export default PostElementFromSettings;