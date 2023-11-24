

function getCurrentTimeStamp(){
    const currentTimeStamp = new Date().toJSON();
    return currentTimeStamp;
}

export {getCurrentTimeStamp};