import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions, Grid } from '@mui/material';

export const StyledMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));

export const StyledBorder = styled('div')(({ theme }) => ({
  border: 'solid',
}));

export const FullHeightCard = styled(Card)(({ theme }) => ({
  height: '100%',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

export const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}));

export const Overlay2 = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
}));

export const Details = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
}));

export const Title = styled('h2')(({ theme }) => ({
  padding: '0 16px',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}));