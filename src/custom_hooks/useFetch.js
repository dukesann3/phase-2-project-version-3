import { useEffect, useState } from "react";

function useFetchPosts(apiUrl){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(fetchedPosts => fetchedPosts.json())
        .then(jsonedFetchedPosts => setPosts(jsonedFetchedPosts))
    },[]);

    return [posts, setPosts];

}

export default useFetchPosts;