import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error(){

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate(-1);
        }, 3000);
    },[]);

    return(
        <>
            <h1>ERROR 404, PAGE NOT FOUND</h1>
        </>
    )
}

export default Error;