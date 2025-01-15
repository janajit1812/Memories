// import * as api from '../api';
import * as api from './api';
import {CREATE,UPDATE,DELETE,FETCH,LIKECOUNT} from '../constants/actionType';


export const getPosts = ()=> async (dispatch)=> {
    try {
        const {data}= await api.fetchPosts(); // Destructing the data part of the response that we are getting after API call.
        dispatch({type: FETCH, payload: data});  
    } catch (error) {
        console.log(error);
    }
}

export const createPost=(posts)=> async (dispatch)=>{
    try {
        const {data}=await api.createPost(posts);
        dispatch({type: CREATE,payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost =(posts)=> async (dispatch)=>{
    try {
        const {data}=await api.updatePost(posts._id,posts);
        console.log(data);
        dispatch({type: UPDATE,payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost =(id)=> async (dispatch)=>{
    try {
        console.log('Fuck me');
        await api.deletePost(id);
        dispatch({type: DELETE,payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const countLike=(id)=> async (dispatch)=>{
    try {
        const {data}=await api.likeCounts(id);
        dispatch({type: LIKECOUNT,payload: data});
    } catch (error) {
        console.log(error);
    }
}

//Cannot destructure property 'data' of '(intermediate value)' as it is undefined.