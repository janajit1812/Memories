import React,{useState} from 'react';
import {StyledAvatar,StyledRoot,StyledGoogleButton,StyledSubmitButton,StyledPaper,StyledForm} from './styles';
import {Typography, Grid, TextField, Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Container } from '@mui/material';
import {GoogleLogin} from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Input from './Input';
import CustomGoogleButton from './CustomGoogleButton';
import { useDispatch } from 'react-redux';
import { signIn,signUp } from '../../actions/Auth';
import { useNavigate,useLocation } from 'react-router-dom';
//1070425388575-mp8d8hakki0oeuvufcebb7ju9i18jqoi.apps.googleusercontent.com -- Client ID

// console.log('Google client id: '+process.env.REACT_APP_CLIENT_ID);

const Auth = () => {
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const initialState ={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(true);

  // alert('showPassword: '+showPassword);
  
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  
  const handleShowPassword=()=> setShowPassword((prevShowPassword)=>!prevShowPassword);

  // const isSignUp=true;

  const handleSubmit =(e)=>{
    e.preventDefault();
    // alert('The form will be submitted upon clicking submit button');
    if(isSignUp){
      dispatch(signUp(formData, navigate));
    }
    else{
      dispatch(signIn(formData, navigate));
    }
    console.log(formData);
  }

  const switchMode=()=>{
    // alert('Clicking the button');
    // isSignUp ? setIsSignUp(false) : setIsSignUp(true); --> This is also correct.
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    // setShowPassword((prevSetShowPassword)=>!prevSetShowPassword);
  }
  
  const googleSuccess= async (res)=>{
    console.log(res);
    // const result=res?.profileObj;
    // console.log(result);
  }
  const googleFailure=()=>{
    console.log("Authentication error. Please try again later");
  }

  // alert(process.env.REACT_APP_CLIENT_ID);

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon/>
        </StyledAvatar>
        <Typography variant="h5">{isSignUp ? "Sign Up": "Sign In"}</Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
              {/* <Grid>
                <TextField name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6} />
              </Grid> */}
              <Input name="firstName" label="First Name" handleChange={handleChange} autofocus half/>
              <Input name="lastName" label="Last Name" handleChange={handleChange}  half/>
              </>             
            )}
            <Input name='email' label="Email Address" handleChange={handleChange} type="email"/>
            <Input name='password' label="Password"  handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
            {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <StyledSubmitButton type='submit' fullWidth variant='contained' color='primary'>{isSignUp?'Sign Up':'Sign In'}</StyledSubmitButton>
          <Grid container justifyContent='center' alignItems='center'>
            <GoogleOAuthProvider clientId ={process.env.REACT_APP_CLIENT_ID} >
              <CustomGoogleButton/>
            </GoogleOAuthProvider>
          </Grid>
          {/* <GoogleOAuthProvider clientId="1070425388575-mp8d8hakki0oeuvufcebb7ju9i18jqoi.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={(response) => {
                        console.log('Login Success: '+ response);
                    }}
                    onError={() => {
                        console.error('Login Failed');
                    }}
                />
        </GoogleOAuthProvider> */}
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>{isSignUp ? 'Already have an account ? Please sign in' : "Doesn't have an account ? Please Sign Up"}</Button>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledPaper>
    </Container>

  )
}

export default Auth
