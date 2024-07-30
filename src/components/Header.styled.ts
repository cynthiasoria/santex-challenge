import { styled } from '@mui/material/styles';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart',
import { Box } from '@mui/material';

export const SXHeaderContainer = styled('header')({
  display: 'flex',
  position: 'fixed',
  width: '98%',
  zIndex: 3,
  height: '5vh',
  top: '0',
  bottom: '0',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'red',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const SXLogo = styled('img')({
  height: '6vh',
});

export const SXCart = styled(Box)({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
});

