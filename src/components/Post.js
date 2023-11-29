import PostElementFromList from "./PostElementFromList";
import PostElementFromSettings from "./PostElementFromSettings";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function Post({ individualPost, setEdittedPostOntoUseState, postType }) {

    const { id, isHidden, isLiked, likes } = individualPost;
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
            .then(jsonedEdittedPost => setEdittedPostOntoUseState(jsonedEdittedPost))
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
        <>
            {postType === 'postlist' ?
                <Card><PostElementFromList individualPost={individualPost} handleIsHiddenPropertyForBothDataBaseAndUseState={handleIsHiddenPropertyForBothDataBaseAndUseState} handleLikedPropertyForBothDataBaseAndUseState={handleLikedPropertyForBothDataBaseAndUseState} /></Card>
                :
                <Card><PostElementFromSettings individualPost={individualPost} handleIsHiddenPropertyForBothDataBaseAndUseState={handleIsHiddenPropertyForBothDataBaseAndUseState} /></Card>
            }
        </>
    )
}

export default Post;