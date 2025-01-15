import { styled } from '@mui/material/styles';
import {AppBar, Grid, Typography} from '@mui/material';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
}));

export const CustomImage = styled('img')(({ theme }) => ({
  marginLeft: '15px',
}));

export const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]:{
    flexDirection: 'column-reverse'
  }
}));