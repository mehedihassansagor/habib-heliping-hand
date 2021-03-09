import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    // console.log(props);
    const {id,title,body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `/post/${id}`;
        history.push(url);
    }
    const stylePost = {border: "1px solid black",borderRadius: "10px", margin:"10px",padding:"10px"}
    return (
        
        <div style = {stylePost}>
            <h4>{id}</h4>
           <h3>{title}</h3>
           <p>{body}</p>
           <button onClick = {() => showComments(id)}>Show comments
           
           </button>
        </div>
    );
};

export default Post;