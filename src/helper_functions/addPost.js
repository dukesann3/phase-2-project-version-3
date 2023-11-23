
async function addNewPostToDataBase(POSTform, POSTurl){
    
    return await fetch(POSTurl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(POSTform)
    })
    .then(newPostResponse => newPostResponse.json());

}

function getCurrentTimeStamp(){
    const currentTimeStamp = new Date().toJSON();
    return currentTimeStamp;
}

export {addNewPostToDataBase, getCurrentTimeStamp};