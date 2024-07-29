import {
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
  styled,
} from '@mui/material';

export const SXCard = styled(Card)({
  textAlign: 'center',
  padding: '20px',
});

export const SXImage = styled(CardMedia)({
  height: 140,
});

export const SXTitle = styled(Typography)({
  fontSize: '1.5em',
  margin: '0.5em 0',
});

export const SXDescription = styled(Typography)({
  fontSize: '1em',
  color: '#555',
});

export const SXPrice = styled(Typography)({
  fontSize: '1.2em',
  color: '#000',
});

export const SXBuyButton = styled(Button)({
  backgroundColor: '#28a745',
  color: 'white',
  '&:hover': {
    backgroundColor: '#218838',
  },
});

export const SXVariantBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '10px',
});
