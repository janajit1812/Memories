import React,{useState,useEffect} from 'react'
import {CustomAppBar,CustomTypography,CustomImage,CustomBrandContainer,CustomToolbar,CustomProfile,CustomPurple, CustomUserName} from './Styles';
import images from '../../Images/memories.png';
import {Link} from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionType';
import { useNavigate,useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const handleClick=()=>{
  // alert('User wants to Sign In');
}


export const Navbar = () => {
  // const user= {"result":{"name":"Janajit", "imageUrl":"https://www.freepik.com/premium-vector/sign-page-abstract-concept-vector-illustration_34376797.html"}};
  // const user=null;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log('Inside Navbar->');
  console.log(user);
  // setUser(null);

  const handleLogOut=()=>{
    // alert("Clearing the local storage of browser");
    setUser(null);
    dispatch({type: LOGOUT});
    navigate('/');
  }
  useEffect(() => {
    const token=user?.token;
    if(token){
      const decodedToken=jwtDecode(token);
      if(decodedToken.exp *1000 < new Date().getTime())
        handleLogOut();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    console.log('Inside Navbar useEffect->');
    console.log(user);
  }, [location])

  // if(user){
  //   console.log('Hello inside navbar');
  //   if(!user.result){
  //     const result=user;
  //     setUser(result);
  //   }
  // }
  
  return (
    <CustomAppBar position="static" color="inherit">
        <CustomBrandContainer>
            {/* <CustomTypography component={Link} to="/" variant="h2" align="center">Memories</CustomTypography> */}
            <CustomTypography variant="h2" align="center">Memories</CustomTypography>
        </CustomBrandContainer>
        <CustomImage src={images} alt="memories" height={60}></CustomImage>
        <CustomToolbar>
          {user ?(
            <CustomProfile>
              <CustomPurple alt={user?.result?.name} src={user?.result?.picture}>{user?.result?.name.charAt(0)}</CustomPurple>
              <CustomUserName variant='h6'>{user?.result?.name}</CustomUserName>
              <Button variant='contained' onClick={handleLogOut} color='secondary'>Logout</Button>
            </CustomProfile>
          )
          :(<Button variant='contained' component={Link} to='/auth' color='primary' onClick={handleClick}>Sign In</Button>)}
        </CustomToolbar>
    </CustomAppBar>
  )
} 