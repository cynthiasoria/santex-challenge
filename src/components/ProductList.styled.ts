import { Box, styled } from '@mui/material';

export const SXGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: '20px',
  padding: '20px',
  marginTop: '90px',
  overflow: 'auto',
  maxHeight: '80vh',
});
