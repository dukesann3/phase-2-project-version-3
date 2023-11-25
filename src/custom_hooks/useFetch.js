import { useEffect, useState } from "react";
import { sortPostsInOrderOfId } from "../helper_functions/sorting";

function useFetchPosts(apiUrl){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(fetchedPosts => fetchedPosts.json())
        .then((jsonedFetchedPosts) => {
            const sortedPostsAscendingId = sortPostsInOrderOfId(jsonedFetchedPosts);
            setPosts(sortedPostsAscendingId);
        })
    },[]);

    return [posts, setPosts];

}

export default useFetchPosts;