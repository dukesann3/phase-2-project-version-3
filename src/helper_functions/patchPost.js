
async function makeChangesToPost(apiUrlWithPostId, objKeyToChange, objValueToChange){
    const JSONedObject = JSON.stringify({[objKeyToChange]: objValueToChange});
    return await fetch(apiUrlWithPostId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONedObject
    })
    .then(response => response.json())
}

export {makeChangesToPost};