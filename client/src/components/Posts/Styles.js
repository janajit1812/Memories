import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));