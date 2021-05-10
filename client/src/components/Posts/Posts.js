import React from 'react'
import Post from './Post/Post.js'
import useStyles from './styles';
function Posts() {
    const classes = useStyles();
    return (
        <div>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
