import { act } from "react";
import { AUTH,LOGOUT} from "../constants/actionType";

export default (state ={authData: null}, action) =>{
    switch (action.type) {
        case AUTH:
            console.log(action.payload);
            localStorage.setItem('profile',JSON.stringify({...action?.payload}));
            return {...state,authData:action?.payload};
        case LOGOUT:
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;
    }
};

