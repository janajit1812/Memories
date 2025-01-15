import React,{useEffect, useState} from "react";
import {StyledMedia,StyledCard,StyledBorder,StyledGrid,FullHeightCard,StyledCardActions,Overlay,Overlay2,Details,Title} from './Styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from "react-redux";
import { deletePost,countLike } from "../../../actions/Posts";
// import { useEffect } from "react";


const Post = (props)=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    // useEffect(() => {
    //   setLoad((prevLoad)=>!prevLoad);
    // }, [props.indicator])
    

    // Just for checking if the proper object Id is coming or not.
    /*useEffect(() => {
      alert(props.currentId)
    }, [props.currentId]);*/

    const dispatch=useDispatch();

    const deletePosts=(id)=>{
        dispatch(deletePost(id));
    }

    const countLikes=(id)=>{
        dispatch(countLike(id));
    }

    const Likes=()=>{
        if(props.post.likes.length> 0)
            return(
                // props.post.likes.find((id)=>id===user?.result?._id)?
                // props.post.likes.length>=2?
                // <Button size="small" color="primary" onClick={()=>countLikes(props.post._id)}>
                //         <ThumbUpAltIcon fontSize="small"/>{props.post.likes.length}&nbsp; Likes &nbsp;
                // </Button>:
                // <Button size="small" color="primary" onClick={()=>countLikes(props.post._id)}>
                //         <ThumbUpAltIcon fontSize="small"/>{props.post.likes.length}&nbsp; Like &nbsp;
                // </Button>

                // props.post.likes.length>=2 ?
                // <><ThumbUpAltIcon fontSize="small"/> {props.post.likes.length}&nbsp; Likes &nbsp;</>
                // :
                // <><ThumbUpAltIcon fontSize="small"/>{props.post.likes.length}&nbsp; Like &nbsp;</>
                props.post.likes.find((id)=> id=== (user?.result?._id || user?.result?.sub)) ?
                (<><ThumbUpAltIcon fontSize="small"/> &nbsp;{props.post.likes.length>2 ?`You and ${props.post.likes.length-1} others`:`${props.post.likes.length} Like${props.post.likes.length>1?'s':''}` }&nbsp;</>)
                :
                (<><ThumbUpAltIcon fontSize="small"/> &nbsp; {props.post.likes.length>2 ? `${props.post.likes.length} Likes` : `${props.post.likes.length} Like${props.post.likes.length>1 ? 's': ''}`} &nbsp;</>)
            )
        return <><ThumbUpAltIcon fontSize="small"/>&nbsp; Like &nbsp;</>
    }
    
    return (
        <>
        {/* <div>
        <h3>{props.post.title}</h3>
        <img src={props.post.selectedFile} alt="None image to display" style={{height: "160px", width: "160px"}}></img>
        </div> */}
        <StyledCard>
            <StyledMedia image={props.post.selectedFile} title={props.post.title} />
            <Overlay>
                <Typography variant="h6">{props.post.name}</Typography>
                <Typography variant="body2">{moment(props.post.createdAT).fromNow()}</Typography>
            </Overlay>
            <Overlay2>
                <Button style={{color: "white"}} size="small" onClick={()=>props.setCurrentId(props.post._id)} disabled={user?.result?._id!==props.post.creator && user?.result?.sub!==props.post.creator}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </Overlay2>
            <Details>
                <Typography variant="body2" color="textSecondary">{props.post.tags.map((tag)=> `#${tag}`)}</Typography>
            </Details>
            <CardContent>
                <Title>
                    <Typography variant="h5" gutterBottom>{props.post.title}</Typography>
                </Title>
                <Typography variant="body" color="textSecondary" component="p">{props.post.message}</Typography>
            </CardContent>
            <StyledCardActions>
                {/* <Button size="small" color="primary" onClick={()=>countLikes(props.post._id)}>
                    <ThumbUpAltIcon fontSize="small"/>&nbsp; Like &nbsp;{props.post.likeCount}
                </Button> */}   
                <Button size="small" color="primary" onClick={()=>countLikes(props.post._id)} disabled={!user?.result}>
                    <Likes/>
                </Button>
                <Button size="small" color="primary" onClick={()=>deletePosts(props.post._id)} disabled={(user?.result?._id!==props.post.creator && user?.result?.sub!==props.post.creator)}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </StyledCardActions>
        </StyledCard>
        </>
    )
};

export default Post;
