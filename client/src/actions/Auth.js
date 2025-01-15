import * as api from './api';
import { AUTH,LOGOUT } from '../constants/actionType';

export const signIn=(formData, navigate) => async(dispatch)=>{
    try {
        // Api callback function call to be called
        const {data}=await api.signIn(formData);
        dispatch({type: AUTH, payload: data});
        // console.log('Inside API signin');
        // console.log(data);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp=(formData,navigate)=> async(dispatch)=>{
    try {
        // Api callback function call to be written
        // const {data}=await api.createUser(formData);
        const {data}=await api.signUp(formData);
        dispatch({type: AUTH, payload: data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const googleSignUp=(googleData,navigate)=> async(dispatch)=>{
    try {
        const {data}=await api.googleSignUp(googleData);
        dispatch({type: AUTH, payload: data});
        navigate('/');
    } catch (error) {
        
    }
}