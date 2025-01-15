import { styled } from '@mui/material/styles';
import {AppBar, Typography, Avatar, Toolbar} from '@mui/material';
import {deepPurple} from '@mui/material/colors';
import {Link} from 'react-router-dom';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',   
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
}));

export const CustomImage = styled('img')(({ theme }) => ({
    marginLeft: '15px',
}));

export const CustomHeading = styled(Typography)(({theme})=>({
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
}));

export const CustomToolbar = styled(Toolbar)(({theme})=>({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
}));

export const CustomProfile = styled('div')(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
}));

export const CustomUserName = styled(Typography)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
}));

export const CustomBrandContainer = styled('div')(({theme})=>({
    display: 'flex',
    alignItems: 'center',
}));

export const CustomPurple = styled(Avatar)(({theme})=>({
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
}));





