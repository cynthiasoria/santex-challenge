import { CircularProgress } from '@mui/material';
import { SXLoadingContainer } from './PageLoader.styled';

export const PageLoader = () => {
  return (
    <SXLoadingContainer>
      <CircularProgress />
    </SXLoadingContainer>
  );
};
