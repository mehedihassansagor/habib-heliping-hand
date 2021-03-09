import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id} = useParams();
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

    },[])
    return (
        <div>
            <h1>this is posty:{id}</h1>
        </div>
    );
};

export default PostDetail;