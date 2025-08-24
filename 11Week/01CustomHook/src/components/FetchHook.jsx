import React, { useEffect, useState } from "react";

export default  function Data(){

    const [post, setPost] = useState({});
    
    async function getPost(){

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        const json = await response.json();
        setPost(json);
        console.log(json)

    }

    useEffect(() =>{
        getPost
    }, []);

    return (
         <div>
            {post.title}
         </div>
    )
}