import { GoogleOAuthProvider, useGoogleLogin,GoogleLogin } from '@react-oauth/google';
import {StyledGoogleButton} from './styles';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../constants/actionType';
import { googleSignUp } from '../../actions/Auth';

// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client();
// const [token, setToken] = useState(null)

// async function verify() {
//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   console.log(ticket);
//   // If the request specified a Google Workspace domain:
//   // const domain = payload['hd'];
// }

// const googleSuccess= async(response)=>{
//   console.log(response);
// }


const CustomGoogleButton = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const login = useGoogleLogin({
      // onSuccess: (response) => console.log(response)/*{googleSuccess}*/,
      onSuccess: async (response) =>{
        try {
          const res= await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo", // This endpoint url calls an api which is specifically designed to retreive data from google authentication access_token.
            {
              headers:{
                Authorization: `Bearer ${response?.access_token}`
              },
            }
          );
          // console.log(response);
          // console.log(JSON.stringify(response, null, 2))
          // console.log('Payload2: '+response?.access_token);
          // const testData=res?.data;
          // console.log(testData);
          // dispatch({type: AUTH,payload: {result: res?.data}});
          // navigate('/');
          dispatch(googleSignUp(res?.data,navigate));
          // console.log(response);
          // console.log(res?.data.sub);
          
        } catch (error) {
            console.log(error);
        }
      },
      onError:()=> console.log("Google Sign in unsuccessful. Please try again later"),
      scope: "openid email profile"
    }); 

    return <StyledGoogleButton color='primary' onClick={login}>
      Google Sign In
      </StyledGoogleButton>
};

export default CustomGoogleButton;
