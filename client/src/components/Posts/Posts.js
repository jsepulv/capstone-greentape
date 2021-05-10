import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js'
import useStyles from './styles';
function Posts({setCurrentId}) {
    const classes = useStyles();
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
    return (
        !posts.length? <CircularProgress/> : (
            <Grid 
                className={classes.container}
                container
                alignItems='stretch'
                spacing={3}
            >
                {posts.map((post)=>(
                    <Grid 
                        key={post.id}
                        item
                        xs={12}
                        sm={6}
                    >
                        <Post post={post} setCurrentId={setCurrentId}/>
                      </Grid>  
                ))}
            </Grid>
        )
    )
}

export default Posts
