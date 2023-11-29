import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function PostElementFromList({ individualPost, handleIsHiddenPropertyForBothDataBaseAndUseState, handleLikedPropertyForBothDataBaseAndUseState }) {

    const { author, post, likes, timestamp, isHidden } = individualPost;

    return (
        <>
            {!isHidden ?
                <Card style={{'width': '80%'}}>
                    <Card.Content>
                        <Card.Header>{author}</Card.Header>
                        <Card.Description>{post}</Card.Description>
                        <p onClick={handleLikedPropertyForBothDataBaseAndUseState}>Likes: {likes}</p>
                        <Card.Meta>{timestamp}</Card.Meta>
                        <button onClick={handleIsHiddenPropertyForBothDataBaseAndUseState}>HIDE BUTTON</button>
                    </Card.Content>
                </Card>
                : null}
        </>
    )
}

export default PostElementFromList;
