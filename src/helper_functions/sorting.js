
function sortPostsInOrderOfId(postsList) {
    for (let i = 1; i < postsList.length; i++) {
        let j = i - 1;
        let temp = postsList[i];
        while (j >= 0 && postsList[j].id < temp.id){
            postsList[j+1] = postsList[j];
            postsList[j] = temp;
            j--;
        }
    }
    return postsList;
}   

export {sortPostsInOrderOfId};