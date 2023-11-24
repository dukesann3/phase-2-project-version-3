import { useEffect, useState } from "react";

function Post({ individualPost, setPatchedPostOntoUseState }) {

    const { id, author, post, isHidden, isLiked, likes, timestamp } = individualPost;
    const apiUrlWithPostId = `http://localhost:8000/posts/${id}`;

    async function makeChangesToPost(objKeyToChange, objValueToChange) {
        const JSONedObject = JSON.stringify({ [objKeyToChange]: objValueToChange });
        return await fetch(apiUrlWithPostId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONedObject
        })
            .then(edittedPost => edittedPost.json())
            .then(jsonedEdittedPost => setPatchedPostOntoUseState(jsonedEdittedPost))
    }

    function valueOfLikeOnceClicked() {
        const likeValue = isLiked ? likes - 1 : likes + 1;
        return likeValue;
    }

    async function handleIsHiddenPropertyForBothDataBaseAndUseState() {
        await makeChangesToPost('isHidden', !isHidden);
    }

    async function handleLikedPropertyForBothDataBaseAndUseState() {
        await Promise.all([makeChangesToPost('likes', valueOfLikeOnceClicked()), makeChangesToPost('isLiked', !isLiked)]);
    }

    return (
        <div>
            {!isHidden ?
                <div>
                    <li>{author}</li>
                    <li>{post}</li>
                    <li>{isHidden}</li>
                    <li onClick={handleLikedPropertyForBothDataBaseAndUseState}>{likes}</li>
                    <li>{timestamp}</li>
                    <button onClick={handleIsHiddenPropertyForBothDataBaseAndUseState}>HIDE POST</button>
                </div>
            : null}
        </div>
    )
}

export default Post;