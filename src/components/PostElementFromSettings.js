import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function PostElementFromSettings({ individualPost, handleIsHiddenPropertyForBothDataBaseAndUseState }) {

    const { author, post, isHidden } = individualPost;

    return (
        <>
            {isHidden ?
                <Card>
                    <Card.Content>
                        <Card.Header>{author}</Card.Header>
                        <Card.Description>{post}</Card.Description>
                        <button onClick={handleIsHiddenPropertyForBothDataBaseAndUseState}>UNHIDE BUTTON</button>
                    </Card.Content>
                </Card>
                : null}
        </>
    )
}

export default PostElementFromSettings;