import React, {useState,useEffect} from "react";
import { Typography, Paper, TextField, Button } from "@mui/material";
import { Root, StyledPaper, CustomForm, FileInput, ButtonSubmit } from './Styles';  // Using styled hook of materialUI, this tags are configured in the style.js file inside Form folder.
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost,updatePost } from "../../actions/Posts";
import { useSelector } from "react-redux";

const Form = (props) => {
    const dispatch=useDispatch();
    const post=useSelector((state)=> props.currentId?state.posts.find((p)=>p._id===props.currentId):null);
    // const posts=useSelector((state)=> state.posts);
    //console.log('The posts array is: '+post);
    const [postData, setPostData] = useState({title: "", message: "", tags: "", selectedFile: ""});
    const user=JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert('Hi');
        if(props.currentId){
            dispatch(updatePost({...postData,name: user?.result?.name}));    
        }
        else{
            dispatch(createPost({...postData,name: user?.result?.name}));
        }
        // setPostData({
        //     creator: "", title: "", message: "", tags: "", selectedFile: ""});
        clear();
    }
    const clear=()=>{
        props.setCurrentId(null);
        setPostData({title: "", message: "", tags: "", selectedFile: ""});
    }

    useEffect(() => {
      if(props.currentId)
        setPostData(post);
    }, [post]);
    
    if(!user?.result?.name){
        return(
            <StyledPaper>
                Please sign in to create your own memories.
            </StyledPaper>

        )
    }

    return (
        <StyledPaper>
            <Root>
                <CustomForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">{props.currentId?'Editing':'Creating'} a memory</Typography>
                    {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator: e.target.value})} /> */}
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title: e.target.value})} />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message: e.target.value})} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags: e.target.value.split(',')})} />
                    <FileInput>
                        <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
                    </FileInput>
                    <ButtonSubmit variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</ButtonSubmit>
                    <Button variant="contained" color="error" size="small" onClick={clear} fullWidth>Clear</Button>
                </CustomForm>
            </Root>
        </StyledPaper>
    )
};

export default Form;