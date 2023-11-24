import { useEffect, useState } from "react";

function Post({ individualPost, setPatchedPostOntoUseState }) {

    const { id, author, post, isHidden, likes, timestamp } = individualPost;
    const apiUrlWithPostId = `http://localhost:8000/posts/${id}`;

    const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem("isLiked")) || false);

    function valueOfLikeOnceClicked() {
        const likeValue = isLiked ? likes - 1 : likes + 1;
        return likeValue;
    }

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

    async function handleIsHiddenPropertyForBothDataBaseAndUseState() {
        await makeChangesToPost('isHidden', !isHidden);
    }

    async function handleLikedPropertyForBothDataBaseAndUseState() {
        setIsLiked(!isLiked);
        localStorage.setItem('isLiked', JSON.stringify(!isLiked));
        await makeChangesToPost('likes', valueOfLikeOnceClicked());
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