import {React,useEffect,useState} from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import {ActionDiv,MainContainer,SmMargin} from './Styles';
import { Grid,CircularProgress } from "@mui/material";

const Posts=(props)=>{
    const posts=useSelector((state)=> state.posts);
    console.log(posts);
    return (
            !posts.length ? <CircularProgress/>:(
            <MainContainer>
                <Grid container alignItems="stretch" spacing={3}>
                    {posts.map((post)=>(
                        <Grid key={post._id} item sx={12} sm={6}>
                            <Post post={post} setCurrentId={props.setCurrentId} currentId={props.currentId}/>
                        </Grid>
                    ))}
                    {/* {posts.map((post)=><Post post={post} key={post._id}/>)} */}
                </Grid>
            </MainContainer>
            )
    )
};

export default Posts;