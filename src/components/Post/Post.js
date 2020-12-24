import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <p>{props.post.title}</p>
        </div>
    )
}

export default Post
